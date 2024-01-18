import React from 'react';
import {Controller} from 'react-hook-form';
import TextInput from './TextInput';

const TextInputWithController = (props: any) => {
  const {control, name, controllerProps = {}, ...inputProps} = props;
  console.log('efrd errorText ', props);

  return (
    <Controller
      control={control}
      render={({onChange, onBlur, value}) => (
        <TextInput
          onBlur={onBlur}
          onChangeText={value => {
            onChange(value);
          }}
          value={value}
          {...inputProps}
        />
      )}
      name={name}
      {...controllerProps}
    />
  );
};

export default TextInputWithController;
