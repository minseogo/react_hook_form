import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // API 호출 함수
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        // 외부데이터 get으로 가져오고 내부데이터 post로 가져온다
        // 외부데이터 다 올때까지 대기, 전부 저장 완료후 실행
        setUsers(response.data); // setUsers은 렌더링 함수, 즉 users에 저장되고있다
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUsers(); // 비동기함수 실행
  }, []); // 빈 어레이 []는 1회 실행

  
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="App">
      <h1>Users</h1>

            {/* 에러일때 노출되는 문구 */}
      {error && <p>Error : {error.message}</p>}

     {/*로딩일때 화면에 노출되는 문구를 삼항식으로 사용*/}
      {loading ? <p>Loading...</p> : 

        <ul>
            {users.map(user => (
            <li key={user.id}>
                <p>이름 : {user.name}</p>
                <p>이메일 : {user.email}</p>
                <p>주소 : {`${user.address["street"]} ${user.address["suite"]}`}</p>
            </li>
            ))}
        </ul>
      }

    </div>
  );
}

export default App;
