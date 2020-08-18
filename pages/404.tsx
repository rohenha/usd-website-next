import { getDataMenu } from "Lib";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
    const menu = await getDataMenu();
    return {
        props: {
            menu
        }
    };
  
}
export default function Error() {
    return <div>Error</div>;
}