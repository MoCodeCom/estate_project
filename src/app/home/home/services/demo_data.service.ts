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
        phone: "0123456789"
      },
      {
        id:"0002",
        firstName: "sarah",
        lastName: "johnson",
        address: "456 High Road",
        postcode: "B18 6CD",
        email: "sarahjohnson@example.com",
        phone: "9876543210"
      },
      {
        id:"0003",
        firstName: "david",
        lastName: "thompson",
        address: "789 Park Avenue",
        postcode: "B24 9EF",
        email: "davidthompson@example.com",
        phone: "4567891230"
      },
      {
        id:"0004",
        firstName: "emma",
        lastName: "wilson",
        address: "321 Oak Street",
        postcode: "B15 7FG",
        email: "emmawilson@example.com",
        phone: "7890123456"
      },
      {
        id:"0005",
        firstName: "michael",
        lastName: "davies",
        address: "987 Elm Court",
        postcode: "B20 4GH",
        email: "michaeldavies@example.com",
        phone: "5678901234"
      },
      {
        id:"0006",
        firstName: "laura",
        lastName: "anderson",
        address: "654 Grove Lane",
        postcode: "B10 5IJ",
        email: "lauraanderson@example.com",
        phone: "9012345678"
      },
      {
        id:"0007",
        firstName: "mark",
        lastName: "wilson",
        address: "321 Maple Road",
        postcode: "B9 8KL",
        email: "markwilson@example.com",
        phone: "3456789012"
      },
      {
        id:"0008",
        firstName: "rebecca",
        lastName: "turner",
        address: "789 Pine Avenue",
        postcode: "B16 3MN",
        email: "rebeccaturner@example.com",
        phone: "6789012345"
      },
      {
        id:"0009",
        firstName: "daniel",
        lastName: "harris",
        address: "456 Cedar Court",
        postcode: "B23 7OP",
        email: "danielharris@example.com",
        phone: "1234567890"
      },
      {
        id:"0010",
        firstName: "sophie",
        lastName: "clark",
        address: "789 Birch Lane",
        postcode: "B11 9XY",
        email: "sophieclark@example.com",
        phone: "2345678901"
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
      currentPostcode: "B12 3AB"
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
      currentPostcode: "B18 6CD"
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
      currentPostcode: "B24 9EF"
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
      currentPostcode: "B15 7FG"
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
      currentPostcode: "B20 4GH"
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
      currentPostcode: "B10 5IJ"
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
      currentPostcode: "B9 8KL"
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
      currentPostcode: "B16 3MN"
    }];

    return tenantList;

  }
  propertyData():any{
    let propertyList = [
      {
        Owner: "John Smith",
        Address: "123 Main Street",
        Postcode: "B12 3AB",
        Rent: "£1,200",
        ServiceCharge: "£100",
        PaymentDate: "1st of every month",
        Phone: "0123456789",
        Details: "Spacious two-bedroom apartment with a balcony overlooking thecity center."
      },
      {
        Owner: "Sarah Johnson",
        Address: "456 High Road",
        Postcode: "B18 6CD",
        Rent: "£900",
        ServiceCharge: "£75",
        PaymentDate: "5th of every month",
        Phone: "9876543210",
        Details: "Cozy one-bedroom flat located in a quiet residential area near local amenities."
      },
      {
        Owner: "David Thompson",
        Address: "789 Park Avenue",
        Postcode: "B24 9EF",
        Rent: "£1,500",
        ServiceCharge: "£120",
        Payment: "Date: 15th of every month",
        Phone: "4567891230",
        Details: "Modern three-bedroom townhouse with a garden, close to parks and schools.",
      },
      {
        Owner: "Emma Wilson",
        Address: "321 Oak Street",
        Postcode: "B15 7FG",
        Rent: "£2,000",
        ServiceCharge: "£150",
        PaymentDate: "10th of every month",
        Phone: "7890123456",
        Details: "Luxury penthouse apartment with panoramic city views and high-end amenities."
      },{
        Owner: "Michael Davies",
        Address: "987 Elm Court",
        Postcode:" B20 4GH",
        Rent: "£800",
        ServiceCharge: "£50",
        PaymentDate: "25th of every month",
        Phone: "5678901234",
        Details: "Recently renovated studio flat in a convenient location near public transportation."
      },
      {
        Owner: "Laura Anderson",
        Address: "654 Grove Lane",
        Postcode: "B10 5IJ",
        Rent: "£1,100",
        ServiceCharge: "£90",
        PaymentDate: "20th of every month",
        Phone: "9012345678",
        Details: "Well-maintained two-bedroom house with a garden, suitable for a small family."
      },
      {
        Owner: "Mark Wilson",
        Address: "321 Maple Road",
        Postcode: "B9 8KL",
        Rent: "£1,300",
        ServiceCharge: "£100",
        PaymentDate: "5th of every month",
        Phone: "3456789012",
        Details: "Spacious three-bedroom semi-detached house with off-street parking."
      },
      {
        Owner: "Rebecca Turner",
        Address: "789 Pine Avenue",
        Postcode: "B16 3MN",
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
        name: "Smith's Handyman Services",
        sector: "Residential",
        services: ["Plumbing", "Electrical", "Carpentry"],
        phone: "0123456789",
        email: "smithshandyman@example.com",
        address: "123 Main Street",
        postcode: "B12 3AB"
      },
      {
        name: "Johnson's Property Maintenance",
        sector: "Commercial",
        services: ["Painting", "Flooring", "General Repairs"],
        phone: "9876543210",
        email: "johnsonsproperty@example.com",
        address: "456 High Road",
        postcode: "B18 6CD"
      },
      {
        name: "Taylor's Garden Maintenance",
        sector: "Landscaping",
        services: ["Lawn Care", "Tree Pruning", "Hedge Trimming"],
        phone: "4567891230",
        email: "taylorsgarden@example.com",
        address: "789 Park Avenue",
        postcode: "B24 9EF"
      },
      {
        name: "Smith & Sons Plumbing",
        sector: "Residential",
        services: ["Plumbing", "Heating", "Boiler Repair"],
        phone: "7890123456",
        email: "smithandsons@example.com",
        address: "321 Oak Street",
        postcode: "B15 7FG"
      },
      {
        name: "GreenThumb Landscapes",
        sector: "Landscaping",
        services: ["Garden Design", "Turfing", "Paving"],
        phone: "5678901234",
        email: "greenthumblandscapes@example.com",
        address: "987 Elm Court",
        postcode: "B20 4GH"
      },
      {
        name: "Carpentry Experts Ltd",
        sector: "Construction",
        services: ["Cabinet Making", "Furniture Installation", "Door Repair"],
        phone: "9012345678",
        email: "carpentryexperts@example.com",
        address: "654 Grove Lane",
        postcode: "B10 5IJ"
      },
      {
        name: "Electric Solutions",
        sector: "Electrical",
        services: ["Wiring", "Lighting Installation", "Appliance Repair"],
        phone: "3456789012",
        email: "electricsolutions@example.com",
        address: "321 Maple Road",
        postcode: "B9 8KL"
      }
    ]
  }

}
