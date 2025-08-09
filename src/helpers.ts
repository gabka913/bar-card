/* eslint-disable @typescript-eslint/no-explicit-any */
import { PropertyValues } from 'lit';
import { HomeAssistant } from 'custom-card-helpers';
import { BarCardConfig } from './types';

/**
 * Performs a deep merge of objects and returns new object. Does not modify
 * objects (immutable) and merges arrays via concatenation and filtering.
 *
 * @param {...object} objects - Objects to merge
 * @returns {object} New object with merged key/values
 */
export function mergeDeep(...objects: any): any {
  const isObject = (obj: any) => obj && typeof obj === 'object';

  return objects.reduce((prev: any, obj: any) => {
    Object.keys(obj).forEach(key => {
      const pVal = prev[key];
      const oVal = obj[key];

      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        /* eslint no-param-reassign: 0 */
        prev[key] = pVal.concat(...oVal);
      } else if (isObject(pVal) && isObject(oVal)) {
        prev[key] = mergeDeep(pVal, oVal);
      } else {
        prev[key] = oVal;
      }
    });

    return prev;
  }, {});
}

export function mapRange(num: number, in_min: number, in_max: number, out_min: number, out_max: number): number {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

export function getMaxMinBasedOnType(hass: HomeAssistant | undefined, value: number | string): number {
  if (typeof value === 'number') {
    return value;
  }
  if (hass === undefined) {
    return 0;
  }
  
  // Handle string values that might be direct numbers
  if (typeof value === 'string') {
    const directNumber = parseFloat(value);
    if (!isNaN(directNumber)) {
      return directNumber;
    }
  }
  
  // Handle entity references
  if (hass.states[value]) {
    const parsedValue = parseFloat(hass.states[value].state);
    if (isNaN(parsedValue)) {
      return 0;
    }
    return parsedValue;
  }
  return 0;
}

// Check if config or Entity changed
export function hasConfigOrEntitiesChanged(element: any, changedProps: PropertyValues, forceUpdate: boolean): boolean {
  if (changedProps.has('config') || forceUpdate) {
    return true;
  }
  for (const config of element._configArray) {
    if (config.entity) {
      const oldHass = changedProps.get('hass') as HomeAssistant | undefined;
      if (oldHass) {
        if (oldHass.states[config.entity] !== element.hass!.states[config.entity]) {
          return true;
        } else {
          continue;
        }
      }
      return true;
    }
  }
  return false;
}

export function createConfigArray(config: BarCardConfig): BarCardConfig[] {
  const configArray: BarCardConfig[] = [];
  if (config.entities) {
    for (const entityConfig of config.entities) {
      if (typeof entityConfig == 'string') {
        const clonedObject = mergeDeep({}, config);
        delete clonedObject.entities;
        const stringConfig = mergeDeep(clonedObject, { entity: entityConfig });
        configArray.push(stringConfig);
      } else if (typeof entityConfig == 'object') {
        const clonedObject = mergeDeep({}, config);
        delete clonedObject.entities;
        const objectConfig = mergeDeep(clonedObject, entityConfig);
        configArray.push(objectConfig);
      }
    }
  } else {
    configArray.push(config);
  }
  return configArray;
}

export function createEditorConfigArray(config: BarCardConfig): BarCardConfig[] {
  const configArray: BarCardConfig[] = [];
  if (config.entities) {
    for (const entityConfig of config.entities) {
      if (typeof entityConfig == 'string') {
        const stringConfig = mergeDeep({}, { entity: entityConfig });
        configArray.push(stringConfig);
      } else if (typeof entityConfig == 'object') {
        const objectConfig = mergeDeep({}, entityConfig);
        configArray.push(objectConfig);
      }
    }
  } else {
    configArray.push(config);
  }
  return configArray;
}

export function arrayMove(arr: any[], fromIndex: number, toIndex: number): any[] {
  const element = arr[fromIndex];
  const newArray = arr.slice();
  newArray.splice(fromIndex, 1);
  newArray.splice(toIndex, 0, element);
  return newArray;
}
