export async function fetchUsers() {
    try {
      const response = await fetch('https://api.github.com/users');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  }