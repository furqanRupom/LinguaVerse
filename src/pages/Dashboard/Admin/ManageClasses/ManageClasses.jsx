import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAllClasses } from "../../../../hooks/useAllClasses";
import SectionTitle from "../../../../components/SectionTitle";
import ManageClassesDetails from "./ManageClassesDetails";

const  ManageClasses = () => {
   const [allClasses] = useAllClasses()
    return (
        <div>
            <SectionTitle title="All Classes" />

            <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
                {
                    allClasses.map(classInfo => <ManageClassesDetails key={classInfo._id} classInfo={classInfo} />)
                }
            </div>
        </div>
    );
};


export default ManageClasses;