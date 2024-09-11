// import { useEffect } from "react";
// import { MODAL_BODY_TYPES } from "../utils/globalConstantUtil";
// import { useSelector, useDispatch } from "react-redux";
// import { closeModal } from "../features/common/modalSlice";
// import AddLeadModalBody from "../features/leads/components/AddLeadModalBody";
// import AddBookModalBody from "../features/books/components/AddBookModalBody";
// import ConfirmationModalBody from "../features/common/components/ConfirmationModalBody";

// function ModalLayout() {
//   const { isOpen, bodyType, size, extraObject, title } = useSelector(
//     (state) => state.modal
//   );
//   const dispatch = useDispatch();

//   const close = (e) => {
//     dispatch(closeModal(e));
//   };

//   return (
//     <>
//       {/* The button to open modal */}

//       {/* Put this part before </body> tag */}
//       <div className={`modal ${isOpen ? "modal-open" : ""}`}>
//         <div className={`modal-box  ${size === "lg" ? "max-w-5xl" : ""}`}>
//           <button
//             className="btn btn-sm btn-circle absolute right-2 top-2"
//             onClick={() => close()}
//           >
//             ✕
//           </button>
//           <h3 className="font-semibold text-2xl pb-6 text-center">{title}</h3>

//           {/* Loading modal body according to different modal type */}
//           {
//             {
//               [MODAL_BODY_TYPES.BOOK_ADD_NEW]: (
//                 <AddBookModalBody
//                   closeModal={close}
//                   extraObject={extraObject}
//                 />
//               ),
//               [MODAL_BODY_TYPES.LEAD_ADD_NEW]: (
//                 <AddLeadModalBody
//                   closeModal={close}
//                   extraObject={extraObject}
//                 />
//               ),
//               [MODAL_BODY_TYPES.CONFIRMATION]: (
//                 <ConfirmationModalBody
//                   extraObject={extraObject}
//                   closeModal={close}
//                 />
//               ),
//               [MODAL_BODY_TYPES.DEFAULT]: <div></div>,
//             }[bodyType]
//           }
//         </div>
//       </div>
//     </>
//   );
// }

// export default ModalLayout;

import { MODAL_BODY_TYPES } from "../utils/globalConstantUtil.js";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../features/common/modalSlice";
// import AddLeadModalBody from "../features/leads/components/AddLeadModalBody";
import AddBookModalBody from "../features/products/components/AddProductModalBody";
import ConfirmationModalBody from "../features/common/components/ConfirmationModalBody";
import EditBookModalBody from "../features/products/components/EditProductModalBody"; 

function ModalLayout() {
  const { isOpen, bodyType, size, extraObject, title } = useSelector(
    (state) => state.modal
  );
  const dispatch = useDispatch();

  const close = () => {
    dispatch(closeModal());
  };

  return (
    <>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <div className={`modal ${isOpen ? "modal-open" : ""}`}>
        <div className={`modal-box ${size === "lg" ? "max-w-5xl" : ""}`}>
          <button
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={close}
          >
            ✕
          </button>
          <h3 className="font-semibold text-2xl pb-6 text-center">{title}</h3>

          {/* Loading modal body according to different modal type */}
          {
            {
              [MODAL_BODY_TYPES.BOOK_ADD_NEW]: (
                <AddBookModalBody
                  closeModal={close}
                  extraObject={extraObject}
                />
              ),
              [MODAL_BODY_TYPES.BOOK_EDIT]: (
                <EditBookModalBody
                  closeModal={close}
                  book={extraObject} // Pass the book object for editing
                />
              ),
              // [MODAL_BODY_TYPES.LEAD_ADD_NEW]: (
              //   <AddLeadModalBody
              //     closeModal={close}
              //     extraObject={extraObject}
              //   />
              // ),
              [MODAL_BODY_TYPES.CONFIRMATION]: (
                <ConfirmationModalBody
                  extraObject={extraObject}
                  closeModal={close}
                />
              ),
              [MODAL_BODY_TYPES.DEFAULT]: <div></div>,
            }[bodyType]
          }
        </div>
      </div>
    </>
  );
}

export default ModalLayout;
