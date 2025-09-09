## Set Up Instructions

Follow this steps to set up the project.
1. Fork or download [this](https://github.com/subrata-chowdhury/ui-components/) repository.
2. Open terminal in the root folder of this project.
3. Type `npm install` and press enter to install dependencies.
4. Then type `npm run storybook` to run the storybook of this project.
5. Open an another terminal in the root folder of this project.
6. Then type `npm run dev` to open the demo UI (provide any login details then you will be redirected to next demo UI).

**Tech Stack Used:** React.js, TypeScript, TailwindCSS, Storybook

## Description

This repository contains 2 Components  
Component 1: InputField  
Component 2: DataTable  

**Features of the Component 1: InputField are:**  
● Text input with label, placeholder, helper text, error message  
● States: disabled, invalid, loading  
● Variants: filled, outlined, ghost  
● Sizes: small, medium, large  
● Clear button, password toggle  
● Support for light & dark theme 

**Features of the Component 2: DataTable are:**  
● Display tabular data  
● Column sorting  
● Row selection (single/multiple)  
● Loading state  
● Empty state  


## Technical Part

**Component 1: InputField**  
Initial Props:  
```
{  
  value?: string;  
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;  
  label?: string;  
  placeholder?: string;  
  helperText?: string;  
  errorMessage?: string;  
  disabled?: boolean;  
  invalid?: boolean;  
  variant?: 'filled' | 'outlined' | 'ghost';  
  size?: 'sm' | 'md' | 'lg';  
}
```

Later 4 more props are added to implement the features like:  
● Loading State  
● Clear Button  
● Password Toggler

Updated Props:
```
{

  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';

  type?: string;
  clearable?: boolean;
  passwordToggle?: boolean;
  loading?: boolean;
}
```

**Component 2: DataTable**  
Initial Props:  
```
interface DataTableProps<T> {
    data: T[];
    columns: Column<T>[];
    loading?: boolean;
    selectable?: boolean;
    onRowSelect?: (selectedRows: T[]) => void;
}

interface Column<T> {
    key: string;
    title: string;
    dataIndex: keyof T;
    sortable?: boolean;
}
```
Later the **dataIndex** 's type is changed to **keyof T | string** for type errors.  
Updated Props:  
```
interface DataTableProps<T> {
    data: T[];
    columns: Column<T>[];
    loading?: boolean;
    selectable?: boolean;
    onRowSelect?: (selectedRows: T[]) => void;
}

interface Column<T> {
    key: string;
    title: string;
    dataIndex: keyof T | string;
    sortable?: boolean;
}
```

## Routes

There are two routes which showcase the Demo UI or Example Useage of the component.  
`/`: Contains a simple login page showcaseing Component 1: InputField.  
<img width="573" height="503" alt="image" src="https://github.com/user-attachments/assets/b2cbd16c-1313-4186-80f6-a94d2f954cfe" />

`/dashboard`: Contains a simple dashboard showcaseing the Component 2: DataTable
<img width="1208" height="438" alt="image" src="https://github.com/user-attachments/assets/b43d48ab-efa3-4dfe-830d-966d53722d04" />


# Component 1: InputField Types

<img width="348" height="167" alt="image" src="https://github.com/user-attachments/assets/5b23564a-97cd-4217-b38b-7dbfff30a892" />
<img width="314" height="129" alt="image" src="https://github.com/user-attachments/assets/efa0fbe4-1321-4c58-924b-9789d91679a2" />
<img width="306" height="135" alt="image" src="https://github.com/user-attachments/assets/0cb00d16-b717-4575-86a9-c5626ee2956e" />
<img width="390" height="145" alt="image" src="https://github.com/user-attachments/assets/abadb34b-fc8c-43fa-9d71-d5386b506cc8" />
<img width="380" height="138" alt="image" src="https://github.com/user-attachments/assets/522bed6a-d179-4b2f-a424-6aa54fbb18ce" />
<img width="309" height="151" alt="image" src="https://github.com/user-attachments/assets/eff01abc-4fad-451d-9cf5-865a71a65698" />  
<img width="309" height="151" alt="image" src="https://github.com/user-attachments/assets/e38023d1-6fe1-4be6-9728-98530d87814d" />

# Component 2: DataTable Types

<img width="443" height="272" alt="image" src="https://github.com/user-attachments/assets/da8ea45b-b225-4361-b460-e678008d0c6c" />
<img width="457" height="253" alt="image" src="https://github.com/user-attachments/assets/6ea6268a-6bc6-449a-ba68-dac0f3df3846" />
<img width="486" height="244" alt="image" src="https://github.com/user-attachments/assets/70a8f00a-7845-4259-a0b6-f0085bbbdd3c" />
<img width="315" height="166" alt="image" src="https://github.com/user-attachments/assets/5e40f8bb-810b-4c2e-acec-efdcccbf668c" />
<img width="291" height="161" alt="image" src="https://github.com/user-attachments/assets/f5c4cdd0-4ede-4b95-b733-a2be12c7662c" />





This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
