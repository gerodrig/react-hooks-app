export interface User {
  id: number;
  name: string;
  location: string;
  role: string;
}

export const getUserAction = async (id: number) => {
  console.log('Function called');
  await new Promise((res) => setTimeout(res, 2000));

  console.log('Function resolved');

  return {
    id: id,
    name: 'Benito Martinez',
    location: 'Airdrie, Alberta',
    role: 'Superheroe',
  };
};
