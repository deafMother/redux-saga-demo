export const messageWorld = message => {
  return {
    type: 'MSG_World',
    message // the sage will receive will intercept this action
  };
};

export const messageDemo = message => {
  return {
    type: 'MSG_Demons',
    message // the sage will receive will intercept this action
  };
};
