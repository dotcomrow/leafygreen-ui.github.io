import { ComponentMeta } from '@storybook/react';
import mergeWith from 'lodash/mergeWith';
import { ComponentProps, JSXElementConstructor } from 'react';
import { StoryArgType, storybookArgTypes } from './storybookArgTypes';
import { storybookExcludedControlParams } from './storybookExcludedControlParams';

export interface StoryMeta<
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
> extends ComponentMeta<T> {
  parameters: ComponentMeta<T>['parameters'] & {
    /**
     * The default story to be displayed on `mongodb.design`
     */
    default: string;
  };
  argTypes?: Partial<{
    [name in keyof ComponentProps<T>]: StoryArgType;
  }>;
}

const baseMeta: StoryMeta<any> = {
  argTypes: {
    ...storybookArgTypes,
  },
  parameters: {
    default: 'Basic',
    controls: {
      exclude: [...storybookExcludedControlParams],
    },
  },
};

export const StoryMeta = <
  T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>,
>(
  meta: StoryMeta<T> = baseMeta,
): StoryMeta<T> => {
  return mergeWith(meta, baseMeta, (metaVal, baseVal) => {
    if (Array.isArray(metaVal)) return metaVal.concat(baseVal);
    if (typeof metaVal === 'string') return metaVal;
    // default to _.merge behavior
  });
};