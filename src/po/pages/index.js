const HomePage = require('./home.page');
const SearchPage = require('./search.page');
const CalculatorPage = require('./calculator.page');
const ComputerEnginePage = require('./computer_engine.page');

function page(name){
    const items = {
        home: new HomePage(),
        search: new SearchPage(),
        calculator: new CalculatorPage(),
        computerEngine: new ComputerEnginePage()
    };

    return items[name];
}

module.exports = {
    HomePage,
    SearchPage,
    CalculatorPage,
    ComputerEnginePage,
    page
}