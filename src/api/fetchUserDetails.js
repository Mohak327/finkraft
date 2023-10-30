export async function fetchUserDetails(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching user details:', error);
      return [];
    }
  }