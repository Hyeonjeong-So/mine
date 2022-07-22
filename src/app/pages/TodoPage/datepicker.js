import React, { useState } from 'react';

const DatePicker = () => {
  return new Date(+new Date() + 3240 * 10000).toISOString().split('T')[0];
};
export default DatePicker;
