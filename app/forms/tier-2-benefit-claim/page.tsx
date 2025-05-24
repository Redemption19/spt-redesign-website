"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  // Personal Information
  memberNumber: z.string().min(5, "Member number must be at least 5 characters"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Please enter a valid date"),
  nationalId: z.string().min(6, "National ID must be at least 6 characters"),
  
  // Contact Information
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(10, "Please enter a complete address"),
  
  // Employment Details
  employerName: z.string().min(2, "Employer name must be at least 2 characters"),
  employmentEndDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Please enter a valid date"),
  reasonForClaim: z.string().min(10, "Please provide detailed reason for claim"),
  claimType: z.enum(["retirement", "disability", "termination", "other"]),
  
  // Bank Details
  bankName: z.string().min(2, "Bank name must be at least 2 characters"),
  accountNumber: z.string().min(5, "Account number must be at least 5 characters"),
  branchCode: z.string().min(4, "Branch code must be at least 4 characters"),
  accountType: z.enum(["savings", "current", "transmission"]),
  
  // Supporting Documents
  hasIdDocument: z.boolean().refine((val) => val === true, "ID document is required"),
  hasBankStatement: z.boolean().refine((val) => val === true, "Bank statement is required"),
  hasProofOfAddress: z.boolean().refine((val) => val === true, "Proof of address is required"),
  
  // Declaration
  declarationAccepted: z.boolean().refine((val) => val === true, "You must accept the declaration")
})

export default function Tier2BenefitClaimForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      memberNumber: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      nationalId: "",
      email: "",
      phone: "",
      address: "",
      employerName: "",
      employmentEndDate: "",
      reasonForClaim: "",
      claimType: "retirement",
      bankName: "",
      accountNumber: "",
      branchCode: "",
      accountType: "savings",
      hasIdDocument: false,
      hasBankStatement: false,
      hasProofOfAddress: false,
      declarationAccepted: false
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className="max-w-4xl mx-auto py-6">
      <Card className="shadow-sm">
        <CardHeader className="space-y-2">
          <CardTitle className="text-2xl">Tier 2 Benefit Claim Form</CardTitle>
          <CardDescription>
            Please complete this form to claim your Tier 2 pension benefits.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-3">
                <h3 className="text-lg font-medium border-b pb-2">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <FormField
                    control={form.control}
                    name="memberNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Member Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter member number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="nationalId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>National ID</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter national ID" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="dateOfBirth"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date of Birth</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <h3 className="text-lg font-medium border-b pb-2">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Enter your address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Employment Details */}
              <div className="space-y-3">
                <h3 className="text-lg font-medium border-b pb-2">Employment Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <FormField
                    control={form.control}
                    name="employerName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employer Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter employer name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="employmentEndDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employment End Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="claimType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Claim Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select claim type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="retirement">Retirement</SelectItem>
                            <SelectItem value="disability">Disability</SelectItem>
                            <SelectItem value="termination">Termination</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="reasonForClaim"
                    render={({ field }) => (
                      <FormItem className="col-span-2">
                        <FormLabel>Reason for Claim</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Provide detailed reason for claim" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Bank Details */}
              <div className="space-y-3">
                <h3 className="text-lg font-medium border-b pb-2">Bank Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <FormField
                    control={form.control}
                    name="bankName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bank Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter bank name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="accountType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Account Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select account type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="savings">Savings</SelectItem>
                            <SelectItem value="current">Current</SelectItem>
                            <SelectItem value="transmission">Transmission</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="accountNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Account Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter account number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="branchCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Branch Code</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter branch code" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Supporting Documents */}
              <div className="space-y-3">
                <h3 className="text-lg font-medium border-b pb-2">Supporting Documents</h3>
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="hasIdDocument"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>ID Document</FormLabel>
                          <FormDescription>
                            Please attach a certified copy of your ID document
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="hasBankStatement"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Bank Statement</FormLabel>
                          <FormDescription>
                            Please attach a recent bank statement or bank confirmation letter
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="hasProofOfAddress"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>Proof of Address</FormLabel>
                          <FormDescription>
                            Please attach a recent proof of address document
                          </FormDescription>
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Declaration */}
              <div className="space-y-3">
                <h3 className="text-lg font-medium border-b pb-2">Declaration</h3>
                <FormField
                  control={form.control}
                  name="declarationAccepted"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Declaration</FormLabel>
                        <FormDescription>
                          I declare that all information provided is true and accurate. I understand that providing false information may result in legal consequences.
                        </FormDescription>
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="w-full md:w-auto">Submit Claim</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}