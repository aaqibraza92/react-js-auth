import React, { useEffect, useState } from 'react';

const data = [
  {
    categoryTitle: "A1",
    items: [{
      name: "A1lorem1",
      checked: true,
      val: "lorem1"
    },
    {
      name: "A1lorem2",
      checked: true,
      val: "A1lorem2"
    },
    {
      name: "A1lorem3",
      checked: true,
      val: "A1lorem3"
    },
    {
      name: "A1lorem4",
      checked: false,
      val: "A1lorem4"
    }]
  },
  {
    categoryTitle: "b2",
    items: [{
      name: "b2lorem1",
      checked: false,
      val: "lorem1"
    },
    {
      name: "b2lorem2",
      checked: true,
      val: "b2lorem2"
    },
    {
      name: "b2lorem3",
      checked: true,
      val: "b2lorem3"
    },
    {
      name: "b2lorem4",
      checked: false,
      val: "b2lorem4"
    }]
  },
  {
    categoryTitle: "c3",
    items: [{
      name: "c3lorem1",
      checked: false,
      val: "lorem1"
    },
    {
      name: "c3lorem2",
      checked: true,
      val: "c3lorem2"
    },
    {
      name: "c3lorem3",
      checked: true,
      val: "c3lorem3"
    },
    {
      name: "c3lorem4",
      checked: false,
      val: "c3lorem4"
    }]
  },
]


const Listing = () => {
  const [allItems, setallItems] = useState(data)

const onItemHandle = (category, item) => {
  const updated = allItems.map((cat) => {
    if (cat.categoryTitle === category) {
      return {
        ...cat,
        items: cat.items.map((it) =>
          it.name === item.name && it.val === item.val
            ? { ...it, checked: !it.checked }
            : it
        ),
      };
    }
    return cat;
  });

  setallItems(updated);
};



  return (
    <div>
      <div className='container' style={{ width: "1200px", margin: "0 auto" }}>
        {
          allItems.length > 0 && allItems?.map((e, i) => (
            <section key={i}>
              <h2>Category:
                {
                  e?.categoryTitle
                }
              </h2>
              {
                e.items.map((val, ind) => (
                  <div key={ind}>
                    <label htmlFor={`cat${val.i}`}
                    onClick={() => onItemHandle(e?.categoryTitle, val)}
                    >
                      <input  checked={val.checked}
                      //  onChange={() => onItemHandle(e?.categoryTitle, val)}
                         type="checkbox" id={`cat${val.i}`} name={e?.categoryTitle} value={val?.val} />
                      {val.name}


                    </label>
                  </div>
                ))
              }

            </section>
          ))
        }
      </div>

    </div>
  );
};

export default Listing;
