import React,{ useState }  from 'react'
import { Link } from 'react-router-dom';
export default function NavBar() {
    const [showCreateRoomModal, setShowCreateRoomModal] = useState(false);
    const [showJoinRoomModal, setShowJoinRoomModal] = useState(false);
  
    const handleCreateRoom = () => {
      // Add logic to create room
      setShowCreateRoomModal(false);
    };
  
    const handleJoinRoom = () => {
      // Add logic to join room
      setShowJoinRoomModal(false);
    };
  return (
    <div className={`bg-primary text-white `}>
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-lg font-bold">
            <div className="flex items-center flex-row gap-1">
              <img
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/stronger-market-differentiation-8534428-6967150.png?f=webp&w=256"
                style={{ width: '32px', height: '32px', borderRadius: '32px', backgroundColor: 'var(--color-primary)' }}
                alt="Stringar Logo"
              />
              <h1 className="text-xl font-bold text-white-900">Stringar</h1>
            </div>
          </Link>
          <Link to="/games" className="hover:text-gray-300">
            Games
          </Link>
          <Link to="/meet" className="hover:text-gray-300">
            Meet Others
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowCreateRoomModal(true)}
            className="hover:text-gray-300"
          >
            Create Room
          </button>
          <button
            onClick={() => setShowJoinRoomModal(true)}
            className="hover:text-gray-300"
          >
            Join Room
          </button>
          <Link to="/profile" className="hover:text-gray-300">
            <i className="fas fa-user"></i>
          </Link>
        </div>
      </nav>
       {/* Create Room Modal */}
       {showCreateRoomModal && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
          <div className="bg-white p-4 rounded-md shadow-lg">
            <h2 className="text-xl font-bold mb-4">Create Room</h2>
            <button onClick={handleCreateRoom} className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Create Room
            </button>
          </div>
        </div>
      )}

      {/* Join Room Modal */}
      {showJoinRoomModal && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-800 opacity-75"></div>
          <div className="bg-white p-4 rounded-md shadow-lg">
            <h2 className="text-xl font-bold mb-4">Join Room</h2>
            <button onClick={handleJoinRoom} className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Join Room
            </button>
          </div>
        </div>
      )}
      </div>
  )
}
