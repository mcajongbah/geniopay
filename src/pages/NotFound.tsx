
type NotFoundProps = {

}

const NotFound: React.FC<NotFoundProps> = ({}) => {
        return (
          <div className="w-full h-full flex-col flex items-center space-y-10 justify-center">
            <img src="./assets/page_not_found.svg" alt="Page Not Found" />
            <h2 className="text-4xl text-primary">Page Not Found</h2>
          </div>
        );
}
export default NotFound;