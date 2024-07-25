import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [targetnum, setNumber] = useState(1);
  

  useEffect(() => {
    // API 호출 함수
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        // 외부데이터 get으로 가져오고 내부데이터 post로 가져온다
        // 외부데이터 다 올때까지 대기, 전부 저장 완료후 실행
        setUsers(response.data); // setUsers은 렌더링 함수, 즉 users에 저장되고있다
        setLoading(false);
        console.log(users);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUsers(); // 비동기함수 실행
  }, []); // 빈 어레이 []는 1회 실행

  const uniqueAlbumIds = Array.from(new Set(users.map(item => item.albumId)));
  // uniqueAlbumIds 데이터 array
  // 클래스(붕어빵들) 생성자 new 복제 (인스턴스 : 붕어빵)
  // 메서드 소속 클래스

  return (
    <div className="App">
      <h1>Users</h1>
      <div>
        {uniqueAlbumIds.map(albumId => (
            <button key={albumId} value={albumId} onClick={()=>{setNumber(albumId);}}>
              Album {albumId}
            </button>
          ))
        }
      </div>

      {/* 에러일때 노출되는 문구 */}
      {error && <p>Error : {error.message}</p>}

      {/* 로딩일때 화면에 노출되는 문구를 삼항식으로 사용 */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{display: "flex", flexWrap: "wrap"}}>
          {users.filter(item => item.albumId === targetnum).map(user => (
            <li key={user.id} style={{width: "33%", listStyle: "none", padding: "0"}}>
              <h2 style={{fontSize: "16px"}}>{user.title}</h2>
              <img src={user.thumbnailUrl} alt={user.title} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default App;
