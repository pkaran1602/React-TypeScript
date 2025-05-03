import React, { useMemo, useState } from 'react';

const Practice = () => {
  type FamilyMember = {
    id: number;
    name: string;
    birthYear: number;
    children: FamilyMember[];
  };

  const familyData: FamilyMember[] = [
    {
      id: 1,
      name: "John Doe",
      birthYear: 1945,
      children: [
        {
          id: 2,
          name: "Anna Doe",
          birthYear: 1973,
          children: [
            { id: 5, name: "Ella Doe", birthYear: 2000, children: [] },
            { id: 6, name: "Lucas Doe", birthYear: 2003, children: [] },
          ],
        },
        {
          id: 3,
          name: "Robert Doe",
          birthYear: 1978,
          children: [{ id: 7, name: "Sophie Doe", birthYear: 2010, children: [] }],
        },
        {
          id: 4,
          name: "Emily Doe",
          birthYear: 1985,
          children: [
            {
              id: 8,
              name: "James Doe",
              birthYear: 2015,
              children: [{ id: 9, name: "Mia Doe", birthYear: 2030, children: [] }],
            },
          ],
        },
      ],
    },
    {
      id: 10,
      name: "Jane Smith",
      birthYear: 1950,
      children: [{ id: 11, name: "Ethan Smith", birthYear: 1980, children: [] }],
    },
  ];

  const [value, setMy_value] = useState("");

  const change_fun = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMy_value(e.target.value);
  };

  const getChildName = (members: FamilyMember[]): string[] => {
    const names: string[] = [];
    const helper = (list: FamilyMember[]) => {
      for (let i = 0; i < list.length; i++) {
        const person = list[i];
        for (let j = 0; j < person.children.length; j++) {
          const child = person.children[j];
          names.push(child.name);
          if (child.children.length > 0) {
            helper(child.children);
          }
        }
      }
    };
    helper(members);
    return names;
  };

  const childrenNames = useMemo(() => getChildName(familyData), []);

  return (
    <>
      <div>
        <label>Search</label>
        <input type="text" value={value} onChange={change_fun} />
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Child Name</th>
            </tr>
          </thead>
          <tbody>
            {childrenNames.map((name, index) => (
              <tr key={index}>
                <td>{name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Practice;
