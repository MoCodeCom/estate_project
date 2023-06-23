import { Injectable } from "@angular/core";

@Injectable({ providedIn:'root'})
export class demo_data{
  constructor(){}

  landlordData():any{
    let landlordList = [
      {
        id:"0001",
        firstName: "john",
        lastName: "smith",
        address: "123 Main Street",
        postcode: "B12 3AB",
        email: "johnsmith@example.com",
        phone: "0123456789",
        details:""
      },
      {
        id:"0002",
        firstName: "sarah",
        lastName: "johnson",
        address: "456 High Road",
        postcode: "B18 6CD",
        email: "sarahjohnson@example.com",
        phone: "9876543210",
        details:""
      },
      {
        id:"0003",
        firstName: "david",
        lastName: "thompson",
        address: "789 Park Avenue",
        postcode: "B24 9EF",
        email: "davidthompson@example.com",
        phone: "4567891230",
        details:""
      },
      {
        id:"0004",
        firstName: "emma",
        lastName: "wilson",
        address: "321 Oak Street",
        postcode: "B15 7FG",
        email: "emmawilson@example.com",
        phone: "7890123456",
        details:""
      },
      {
        id:"0005",
        firstName: "michael",
        lastName: "davies",
        address: "987 Elm Court",
        postcode: "B20 4GH",
        email: "michaeldavies@example.com",
        phone: "5678901234",
        details:""
      },
      {
        id:"0006",
        firstName: "laura",
        lastName: "anderson",
        address: "654 Grove Lane",
        postcode: "B10 5IJ",
        email: "lauraanderson@example.com",
        phone: "9012345678",
        details:""
      },
      {
        id:"0007",
        firstName: "mark",
        lastName: "wilson",
        address: "321 Maple Road",
        postcode: "B9 8KL",
        email: "markwilson@example.com",
        phone: "3456789012",
        details:""
      },
      {
        id:"0008",
        firstName: "rebecca",
        lastName: "turner",
        address: "789 Pine Avenue",
        postcode: "B16 3MN",
        email: "rebeccaturner@example.com",
        phone: "6789012345",
        details:""
      },
      {
        id:"0009",
        firstName: "daniel",
        lastName: "harris",
        address: "456 Cedar Court",
        postcode: "B23 7OP",
        email: "danielharris@example.com",
        phone: "1234567890",
        details:""
      },
      {
        id:"0010",
        firstName: "sophie",
        lastName: "clark",
        address: "789 Birch Lane",
        postcode: "B11 9XY",
        email: "sophieclark@example.com",
        phone: "2345678901",
        details:""
      }

    ]

    return landlordList;

  }

  tenantData():any{
    let tenantList = [
      {
      id:"0001",
      firstName: "alex",
      lastName: "johnson",
      previousAddress: "234 Park Street",
      previousPostcode: "B12 4CD",
      email: "alexjohnson@example.com",
      phone: "0123456789",
      owner: "John Smith",
      currentAddress: "123 Main Street",
      currentPostcode: "B12 3AB",
      details:""
    },
    {
      id:"0002",
      firstName: "emily",
      lastName: "brown",
      previousAddress: "789 High Road",
      previousPostcode: "B18 5EF",
      email: "emilybrown@example.com",
      phone: "9876543210",
      owner: "Sarah Johnson",
      currentAddress: "456 High Road",
      currentPostcode: "B18 6CD",
      details:""
    },
    {
      id:"0003",
      firstName: "daniel",
      lastName: "taylor",
      previousAddress: "567 Park Avenue",
      previousPostcode: "B24 7GH",
      email: "danieltaylor@example.com",
      phone: "4567891230",
      owner: "David Thompson",
      currentAddress: "789 Park Avenue",
      currentPostcode: "B24 9EF",
      details:""
    },
    {
      id:"0004",
      firstName: "sophia",
      lastName: "robinson",
      previousAddress: "987 Oak Street",
      previousPostcode: "B15 6IJ",
      email: "sophiarobinson@example.com",
      phone: "7890123456",
      owner: "Emma Wilson",
      currentAddress: "321 Oak Street",
      currentPostcode: "B15 7FG",
      details:""
    },
    {
      id:"0005",
      firstName: "oliver",
      lastName: "davis",
      previousAddress: "456 Elm Court",
      previousPostcode: "B20 3KL",
      email: "oliverdavis@example.com",
      phone: "5678901234",
      owner: "Michael Davies",
      currentAddress: "987 Elm Court",
      currentPostcode: "B20 4GH",
      details:""
    },
    {
      id:"0006",
      firstName: "amelia",
      lastName: "lee",
      previousAddress: "654 Grove Lane",
      previousPostcode: "B10 4MN",
      email: "amelialeee@example.com",
      phone: "9012345678",
      owner: "Laura Anderson",
      currentAddress: "654 Grove Lane",
      currentPostcode: "B10 5IJ",
      details:""
    },
    {
      id:"0007",
      firstName: "william",
      lastName: "walker",
      previousAddress: "321 Maple Road",
      previousPostcode: "B9 7OP",
      email: "williamwalker@example.com",
      phone: "3456789012",
      owner: "Mark Wilson",
      currentAddress: "321 Maple Road",
      currentPostcode: "B9 8KL",
      details:""
    },
    {
      id:"0008",
      firstName: "ava",
      lastName: "turner",
      previousAddress: "789 Pine Avenue",
      previousPostcode: "B16 2XY",
      email: "avaturner@example.com",
      phone: "6789012345",
      owner: "Rebecca Turner",
      currentAddress: "789 Pine Avenue",
      currentPostcode: "B16 3MN",
      details:""
    }];

    return tenantList;
  }

  propertyData():any{
    let propertyList = [
      {
        Id:"0001",
        Owner: "john smith",
        Address: "123 main street",
        Postcode: "B12 3AB",
        City:"Birmingham",
        Rent: "£1,200",
        ServiceCharge: "£100",
        PaymentDate: "1st of every month",
        Phone: "0123456782",
        Details: "Spacious two-bedroom apartment with a balcony overlooking thecity center."
      },
      {
        Id:"0002",
        Owner: "john smith",
        Address: "126 main street",
        Postcode: "B12 3AB",
        City:"Birmingham",
        Rent: "£2,200",
        ServiceCharge: "£150",
        PaymentDate: "1st of every month",
        Phone: "0123456782",
        Details: "Spacious two-bedroom apartment with a balcony overlooking thecity center."
      },
      {
        Id:"0003",
        Owner: "sarah johnson",
        Address: "456 high road",
        Postcode: "B18 6CD",
        City:"Birmingham",
        Rent: "£900",
        ServiceCharge: "£75",
        PaymentDate: "5th of every month",
        Phone: "9876543210",
        Details: "Cozy one-bedroom flat located in a quiet residential area near local amenities."
      },
      {
        Id:"0004",
        Owner: "david thompson",
        Address: "789 park avenue",
        Postcode: "B24 9EF",
        City:"Birmingham",
        Rent: "£1,500",
        ServiceCharge: "£120",
        Payment: "Date: 15th of every month",
        Phone: "4567891230",
        Details: "Modern three-bedroom townhouse with a garden, close to parks and schools.",
      },
      {
        Id:"0005",
        Owner: "emma wilson",
        Address: "321 oak street",
        Postcode: "B15 7FG",
        City:"Birmingham",
        Rent: "£2,000",
        ServiceCharge: "£150",
        PaymentDate: "10th of every month",
        Phone: "7890123456",
        Details: "Luxury penthouse apartment with panoramic city views and high-end amenities."
      },
      {
        Id:"0006",
        Owner: "laura anderson",
        Address: "654 grove lane",
        Postcode: "B10 5IJ",
        City:"Birmingham",
        Rent: "£1,100",
        ServiceCharge: "£90",
        PaymentDate: "20th of every month",
        Phone: "9012345678",
        Details: "Well-maintained two-bedroom house with a garden, suitable for a small family."
      },
      {
        Id:"0007",
        Owner: "mark wilson",
        Address: "321 maple road",
        Postcode: "B09 8KL",
        City:"Birmingham",
        Rent: "£1,300",
        ServiceCharge: "£100",
        PaymentDate: "5th of every month",
        Phone: "3456789012",
        Details: "Spacious three-bedroom semi-detached house with off-street parking."
      },
      {
        Id:"0008",
        Owner: "rebecca turner",
        Address: "789 pine avenue",
        Postcode: "B16 3MN",
        City:"Birmingham",
        Rent: "£950",
        ServiceCharge: "£80",
        PaymentDate: "1st of every month",
        Phone: "6789012345",
        Details: "Recently refurbished one-bedroom apartment in a modern development."
      }
    ];

    return propertyList;
  }

  otherData():any{
    let otherList = [
      {
        id:"0001",
        name: "smith's handyman services",
        sector: "residential",
        services: ["plumbing", "electrical", "carpentry"],
        phone: "0123456789",
        email: "smithshandyman@example.com",
        address: "123 Main Street",
        postcode: "B12 3AB",
        details:""
      },
      {
        id:"0002",
        name: "Johnson's Property Maintenance",
        sector: "commercial",
        services: ["painting", "flooring", "general repairs"],
        phone: "9876543210",
        email: "johnsonsproperty@example.com",
        address: "456 High Road",
        postcode: "B18 6CD",
        details:""
      },
      {
        id:"0003",
        name: "taylor's garden maintenance",
        sector: "landscaping",
        services: ["lawn care", "tree pruning", "hedge trimming"],
        phone: "4567891230",
        email: "taylorsgarden@example.com",
        address: "789 Park Avenue",
        postcode: "B24 9EF",
        details:""
      },
      {
        id:"0004",
        name: "smith & sons plumbing",
        sector: "residential",
        services: ["plumbing", "heating", "boiler repair"],
        phone: "7890123456",
        email: "smithandsons@example.com",
        address: "321 Oak Street",
        postcode: "B15 7FG",
        details:""
      },
      {
        id:"0005",
        name: "greenThumb landscapes",
        sector: "Landscaping",
        services: ["garden design", "turfing", "paving"],
        phone: "5678901234",
        email: "greenthumblandscapes@example.com",
        address: "987 Elm Court",
        postcode: "B20 4GH",
        details:""
      },
      {
        id:"0006",
        name: "carpentry experts ltd",
        sector: "construction",
        services: ["cabinet making", "furniture installation", "door repair"],
        phone: "9012345678",
        email: "carpentryexperts@example.com",
        address: "654 Grove Lane",
        postcode: "B10 5IJ",
        details:""
      },
      {
        id:"0007",
        name: "electric solutions",
        sector: "electrical",
        services: ["wiring", "lighting installation", "appliance repair"],
        phone: "3456789012",
        email: "electricsolutions@example.com",
        address: "321 Maple Road",
        postcode: "B9 8KL",
        details:""
      }
    ];
    return otherList;
  }

  moneyData():any{
    let voucherData = [
      {
        id:"0001",
        position: "Tenant",
        date: "March 15, 2022",
        name: "John Smith",
        about: "Rent Payment",
        totalAmount: 1200,
        paymentType: "Bank Transfer",
        transaction:[
          {
            type:"receive",
            description:"for rent",
            amount:"1200"
          }
        ]

      },
      {
        id:"0002",
        position: "Landlord",
        date: "June 1, 2022",
        name: "Sarah Johnson",
        about: "Rent Adjustment",
        totalAmount: 300,
        paymentType: "Cash",
        transaction:[
          {
            type:"receive",
            description:"for rent",
            amount:"300"
          }
        ]
      },
      {
        id:"0003",
        position: "Others",
        date: "October 10, 2022",
        name: "ABC Cleaning Services",
        about: "Cleaning Services",
        totalAmount: 150,
        paymentType: "Bank Transfer",
        transaction:[
          {
            type:"receive",
            description:"for rent",
            amount:"80"
          },
          {
            type:"pay",
            description:"adjustment",
            amount:"220"
          },
          {
            type:"pay",
            description:"fix pumbler",
            amount:"10"
          }
        ]
      },
      {
        id:"0004",
        position: "Tenant",
        date: "January 5, 2023",
        name: "Emily Thompson",
        about: "Rent Payment",
        totalAmount: 800,
        paymentType: "Bank Transfer",
        transaction:[
          {
            type:"receive",
            description:"for rent",
            amount:"800"
          }
        ]
      },
      {
        id:"0005",
        position: "Landlord",
        date: "February 20, 2023",
        name: "Michael Anderson",
        about: "Rent Adjustment",
        totalAmount: 200,
        paymentType: "Cash",
        transaction:[
          {
            type:"receive",
            description:"for rent",
            amount:"25"
          },
          {
            type:"pay",
            description:"adjustment",
            amount:"150"
          },
          {
            type:"pay",
            description:"fix pumbler",
            amount:"75"
          }
        ]
      },
      {
        id:"0006",
        position: "Tenant",
        date: "April 10, 2023",
        name: "Jessica Lee",
        about: "Services (Plumbing)",
        totalAmount: 500,
        paymentType: "Bank Transfer",
        transaction:[
          {
            type:"receive",
            description:"for rent",
            amount:"750"
          },
          {
            type:"pay",
            description:"adjustment",
            amount:"30"
          },
          {
            type:"pay",
            description:"fix pumbler",
            amount:"10.50"
          }
        ]
      },
      {
        id:"0007",
        position: "Others",
        date: "July 15, 2023",
        name: "XYZ Construction",
        about: "Repair Services",
        totalAmount: 790.50,
        paymentType: "Cash",
        transaction:[
          {
            type:"pay",
            description:"for rent",
            amount:"750"
          },
          {
            type:"pay",
            description:"adjustment",
            amount:"30"
          },
          {
            type:"pay",
            description:"fix pumbler",
            amount:"10.50"
          }
        ]
      },
      {
        id:"0008",
        position: "Landlord",
        date: "August 5, 2023",
        name: "Thomas Collins",
        about: "Rent Adjustment",
        totalAmount: 150,
        paymentType: "Bank Transfer",
        transaction:[
          {
            type:"pay",
            description:"rent for property",
            amount:"150"
          }
        ]
      },
      {
        id:"0009",
        position: "Tenant",
        date: "November 1, 2023",
        name: "Olivia Martinez",
        about: "Rent Payment",
        totalAmount: 1500,
        paymentType: "Bank Transfer",
        transaction:[
          {
            type:"receive",
            description:"for rent",
            amount:"750"
          },
          {
            type:"pay",
            description:"adjustment",
            amount:"30"
          },
          {
            type:"pay",
            description:"fix pumbler",
            amount:"10.50"
          }
        ]
      },
      {
        id:"0010",
        position: "Others",
        date: "December 20, 2023",
        name: "Green Thumb Landscapes",
        about: "Garden Maintenance Services",
        totalAmount: 200,
        paymentType: "Cash",
        transaction:[
          {
            type:"receive",
            description:"painting",
            amount:"250"
          },
          {
            type:"pay",
            description:"adjustment",
            amount:"50"
          }
        ]
      }
    ];

    return voucherData;
  }

}
