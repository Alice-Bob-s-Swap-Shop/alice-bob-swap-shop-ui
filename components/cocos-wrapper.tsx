const CocosWrapper: React.FC = () => {
  return (
    <div className="absolute bottom-0 h-full -z-10">
      <iframe
        src="web-mobile/index.html"
        className="absolute bottom-0 w-screen h-1/2 border-t-8 border-slate-800"
      ></iframe>
    </div>
  );
};

export default CocosWrapper;
