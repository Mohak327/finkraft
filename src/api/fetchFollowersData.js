export async function fetchFollowersData(username, category) {
try {
    const response = await fetch(`https://api.github.com/users/${username}/${category}`);
    const data = await response.json();
    return data;
} catch (error) {
    console.error('Error fetching user details:', error);
    return [];
}
}