import "./category-overview-component.css";

const CategoryOverviewComponent = () => {
    const categoryLis = () => {
        return(<>
            Category 1
            </>);
    }
    return(
        <>
            <div className="category-section-title">
                Category
            </div>
            <div className="category-section">
                <div className="category">
                    Category 1
                </div>
                <div className="category">
                    Category 2
                </div>
                <div className="category">
                    Category 3
                </div>
                <div className="category">
                    Category 1
                </div>
                <div className="category">
                    Category 2
                </div>
                <div className="category">
                    Category 3
                </div>
            </div>
        </>
    );
}

export default CategoryOverviewComponent;