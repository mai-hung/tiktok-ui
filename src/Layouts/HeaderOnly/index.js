import Header from '~/Layouts/components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header></Header>
            {children}
        </div>
    );
}

export default HeaderOnly;
