import React from 'react';
import Qualitie from './qualities';
import Bookmark from './bookmark';

const User = (props) => {
  let { _id, name, profession, qualities, completedMeetings, rate, bookmark } = props;

  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>{profession.name}</td>
      <td>
        {qualities.map((q) => (
          <Qualitie key={q._id} {...q} />
        ))}
      </td>
      <td>{completedMeetings}</td>
      <td>{rate}</td>
      <td>
        <Bookmark key={_id} id={_id} onChange={props.onChange} status={bookmark} />
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => props.onDelete(_id)}>
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;
