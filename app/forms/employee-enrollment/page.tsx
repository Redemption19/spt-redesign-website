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

// Remove the metadata export from here

const formSchema = z.object({
  // Personal Information
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Please enter a valid date"),
  nationalId: z.string().min(6, "National ID must be at least 6 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),

  // Employment Information
  employerName: z.string().min(2, "Employer name must be at least 2 characters"),
  employmentDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Please enter a valid date"),
  employeeId: z.string().min(2, "Employee ID must be at least 2 characters"),
  department: z.string().min(2, "Department must be at least 2 characters"),
  position: z.string().min(2, "Position must be at least 2 characters"),
  salary: z.string().min(1, "Please enter your salary"),

  // Contribution Details
  contributionType: z.enum(["percentage", "fixed"]),
  contributionAmount: z.string().min(1, "Please enter contribution amount"),

  // Beneficiary Information
  beneficiaryName: z.string().min(2, "Beneficiary name must be at least 2 characters"),
  beneficiaryRelation: z.string().min(2, "Please specify the relationship"),
  beneficiaryContact: z.string().min(10, "Please enter a valid contact number"),

  // Terms and Conditions
  acceptTerms: z.boolean().refine((val) => val === true, "You must accept the terms and conditions")
})

export default function EmployeeEnrollmentForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contributionType: "percentage",
      acceptTerms: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Here you would typically send the form data to your backend
    console.log(values)
  }

  return (
    <div className="container-custom py-12">
      <Card>
        <CardHeader>
          <CardTitle>Employee Enrollment Form</CardTitle>
          <CardDescription>
            Please fill out all required information to enroll in the pension scheme.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Personal Information Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John" {...field} />
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
                          <Input placeholder="Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <FormField
                    control={form.control}
                    name="nationalId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>National ID</FormLabel>
                        <FormControl>
                          <Input placeholder="ID Number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Employment Information Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Employment Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="employerName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employer Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Company Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="employmentDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Employment Date</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Contribution Details Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Contribution Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="contributionType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contribution Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select contribution type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="percentage">Percentage of Salary</SelectItem>
                            <SelectItem value="fixed">Fixed Amount</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="contributionAmount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contribution Amount</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder={form.watch("contributionType") === "percentage" ? "e.g., 5" : "e.g., 500"}
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          {form.watch("contributionType") === "percentage" ? "Enter percentage (%)" : "Enter amount"}
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Terms and Conditions */}
              <FormField
                control={form.control}
                name="acceptTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I accept the terms and conditions
                      </FormLabel>
                      <FormDescription>
                        By submitting this form, you agree to our Terms of Service and Privacy Policy.
                      </FormDescription>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">Submit Enrollment</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}