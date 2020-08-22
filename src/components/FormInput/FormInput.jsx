import React from 'react';
import classNames from 'classnames/bind';

import styles from './FormInput.module.scss';

const cx = classNames.bind(styles);

function FormInput({
  handleChange,
  label,
  ...otherProps
}) {
  return (
    <div className={styles.group}>
      <input 
        className={styles.form_input} 
        onChange={handleChange} 
        {...otherProps}
      />
      {
        label ? 
        (<label 
            className={cx({
              form_input_label: true,
              shrink: otherProps.value.length,
            })}
        >
          {label}
        </label>)
        :
        null
      }
    </div>
  )
}

export default FormInput;