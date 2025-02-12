export default function Def_loader({ isvisible }: { isvisible: boolean }) {
    if (!isvisible) {
      return null;
    }
    return (
      <div>
        <div className=" z-[99] fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm  flex-col gap-4 w-full h-[100vh] flex items-center justify-center">
          <div className="w-[100px] h-[100px] flex items-center justify-center rounded-lg z-30">
            <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
              <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }