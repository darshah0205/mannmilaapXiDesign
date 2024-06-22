import React, { useState } from "react";
import { dummyUser } from "./dummy";

export const UserDetails = () => {
  const [editIsOn, setEditIsOn] = useState(false);
  const user = dummyUser;
  return (
    <div className="flex flex-col gap-4 p-10 w-full overflow-y-auto">
      <input
        disabled={!editIsOn}
        type="text"
        name=""
        id=""
        value={user.name}
        className="text-xl font-bold"
      />
      <div className="contact flex flex-row">
        <label className="font-bold mr-1" for="cmobile">
          Contact Mobile:{" "}
        </label>
        <input
          disabled={!editIsOn}
          type="text"
          value={user.candidateMobile}
          id="cmobile"
        />
        <label className="font-bold mr-1" for="wmobile">
          Whatsapp Mobile:{" "}
        </label>
        <input
          disabled={!editIsOn}
          type="text"
          value={user.whatsappNumber}
          id="wmobile"
        />
        <input disabled={!editIsOn} type="text" value={user.email} id="email" />
      </div>
      <div className="birthdate flex gap-2">
        <label for="birthdate" className="font-bold">
          Birthdate
        </label>
        <input
          disabled={!editIsOn}
          type="text"
          value={user.birthdate.slice(0, 10)}
          id="birthdate"
        />
      </div>
      <input disabled={!editIsOn} type="text" value={user.gender} />
      <div className="parents flex flex-row">
        <label className="font-bold mr-1" for="mother">
          Mother:{" "}
        </label>
        <input
          disabled={!editIsOn}
          type="text"
          value={user.motherName}
          id="mother"
        />
        <label className="font-bold mr-1" for="father">
          Father:{" "}
        </label>
        <input
          disabled={!editIsOn}
          type="text"
          value={user.fatherName}
          id="father"
        />
      </div>
      <input
        disabled={!editIsOn}
        type="text"
        value={user.highestLevelOfEducation}
      />
      <input disabled={!editIsOn} type="text" value={user.occupation} />
      <input disabled={!editIsOn} type="text" value={user.religion} />
      <input disabled={!editIsOn} type="text" value={user.caste} />
      <textarea type="text" value={user.address} rows={3} cols={5} />
      <div className="groups">
        <h1 className="text-xl font-bold">List of Groups</h1>
        <ul>
          {user.groupsExpiry.map((grp) => {
            return (
              <li className="flex gap-3">
                <div className="name font-bold">{grp.name}</div>
                <div className="expiry">{grp.expiry.slice(0, 10)}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <button className="bg-green-300 w-fit p-4 mx-auto rounded-xl">
        Download BioData
      </button>
    </div>
  );
};
