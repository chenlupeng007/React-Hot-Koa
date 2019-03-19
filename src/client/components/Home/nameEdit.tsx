import React from 'react';

interface Props {
  initialUserName: string;
  editingName: string;
  onNameUpdated: () => any;
  onEditingNameUpdated: (newEditingName: string) => any;
  disabled: boolean;
}

const NameEditComponent = (props: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onEditingNameUpdated(e.target.value);
  };

  const onNameSubmit = () => {
    props.onNameUpdated();
  };

  return (
    <>
      <label>Update name:</label>
      <input value={props.editingName} onChange={onChange} />
      <button onClick={onNameSubmit} disabled={props.disabled}>
        Change
      </button>
    </>
  );
};

export default NameEditComponent;
