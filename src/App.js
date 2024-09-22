// Her bir butonun üzerine, içerikte yazan eyleme karşılık gelen satır içi/inline stiller ekleyin
export default function ButtonVariants() {
  return (
    <span
      className="wrapper"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#5F9EA0',
      }}
    >
      <button
        className="button-create"
        style={{
          backgroundColor: '#4682B4',
          fontFamily: '"Roboto", sans-serif',
          color: 'white',
          borderRadius: '50%',
          padding: '10px',
          margin: '10px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.8)',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = 'darkblue')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#4682B4')}
      >
        Create
      </button>
      <button
        className="button-update"
        style={{
          backgroundColor: '#8FBC8F',
          fontFamily: '"Roboto", sans-serif',
          color: 'white',
          borderRadius: '50%',
          padding: '10px',
          margin: '10px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.8)',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = 'darkgreen')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#8FBC8F')}
      >
        Update
      </button>
      <button
        className="button-delete"
        style={{
          backgroundColor: '#CD5C5C',
          fontFamily: '"Roboto", sans-serif',
          color: 'white',
          borderRadius: '50%',
          padding: '10px',
          margin: '10px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.8)',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = 'darkred')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#CD5C5C')}
      >
        Delete
      </button>
    </span>
  )
}
