import ContactCard from "./ContactCard";
import { useRef } from "react";

const ContactList = (props) => {
  console.log(props);
  const inputElment = useRef(null);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <li className="py-3 sm:py-4">
        <div className="flex items-center space-x-4">
          <ContactCard
            contact={contact}
            clickHandler={deleteContactHandler}
            key={contact.id}
          />
        </div>
      </li>
    );
  });

  const getSeachTerm = () => {
    props.searchKeyword(inputElment.current.value);
  };

  return (
    <div className=" bg-white  shadow-md sm:p-8 dark:bg-gray-800 ">
        <h2 className="text-xl font-bold leading-none text-gray-900 dark:text-white m-4 text-center">Contact List</h2>
        <div className="ui search">
          <div className="ui icon input">
          <label type="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input
              ref={inputElment}
              type="search"
              placeholder="Search..."
              className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={props.term}
              onChange={getSeachTerm}
            />
            </div>
          </div>
        </div>
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {renderContactList}
          </ul>
        </div>
    </div>
  );
};

export default ContactList;
