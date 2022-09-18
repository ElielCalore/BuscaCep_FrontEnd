import ClipLoader from "react-spinners/ClipLoader";

export function Button({ search, handleSubmit, loading }) {
  return (
    <div>
      <button
        disabled={!search || search?.length !== 8}
        onClick={handleSubmit}
        className="btn btn-dark"
        type="button"
      >
        {loading ? (
          <ClipLoader
            size={20}
            color={"#00000"}
            loading={loading}
            speedMultiplier={1.5}
          />
        ) : (
          "Pesquisar"
        )}
      </button>
    </div>
  );
}
