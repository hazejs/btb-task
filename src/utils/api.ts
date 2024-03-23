
export const login = async (username: string, password: string): Promise<any> => {  
  try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }), // Stringify login data
      });

      if (!response.ok) {
        throw new Error(`Login failed with status: ${response.status}`);
      }

      const data = await response.json();

      if (!!data.user) {
          localStorage.setItem('isAuthanticated', 'true')
          localStorage.setItem('user', JSON.stringify(data.user))
          return data.user
      } else {
          return undefined
      }
  } catch (error) {
      console.error('Login error:', error);
    return undefined; // Return undefined on error
  }
};


export const fetchCharacters = async (query: string) => {
    const response = await fetch(`/api/characters/?name=${query}`);
    const data = await response.json();    
    if (!response.ok) {
      throw new Error('Failed to fetch characters');
    }
    return data;
};