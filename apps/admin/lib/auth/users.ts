/**
 * The list of users who can access the admin panel.
 * In a production app, this would be stored in a database.
 */
export const users = [
  {
    id: '1',
    name: 'Esmaeil Abedi',
    email: 'admin@esmaeilabedi.dev',
    // In a real app, this would be a properly hashed password
    // This is just for demonstration purposes
    // The hash represents "adminpassword"
    password: '$2b$10$ISDfliUS.7vLvzqZJHMQGeOIawwVlJgmj7JI9v.EiBDa.KyDD2k8u',
    role: 'admin',
    image: '/images/avatar.jpg',
  },
];
