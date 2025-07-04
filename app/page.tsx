import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowRight, 
  Building, 
  Calculator,
  User,
  Landmark,
  Briefcase,
  BarChart,
  PieChart,
  Clock,
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { pensionSchemes, companyStats, blogPosts } from '@/lib/constants'
import { formatDate } from '@/lib/utils'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-background">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-6 animate-fadeIn">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Secure Your 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"> Financial Future</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-md">
                Expert pension administration and retirement planning solutions for all Ghanaians.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="hero-button">
                  <Link href="/schemes">Explore Our Schemes</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="group">
                  <Link href="/contact" className="flex items-center">
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block animate-float">
              <Image 
                src="https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Financial planning"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 gradient-bg text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {companyStats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-white mt-2">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Schemes Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="section-title">Our Pension Schemes</h2>
            <p className="section-subtitle mx-auto">
              Tailored retirement solutions to meet the needs of individuals and organizations throughout Ghana.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pensionSchemes.map((scheme) => {
              const Icon = scheme.icon === 'Building' ? Building : 
                          scheme.icon === 'User' ? User :
                          scheme.icon === 'Landmark' ? Landmark : Briefcase
              
              return (
                <Card key={scheme.id} className="feature-card card-hover">
                  <CardHeader>
                    <div className="feature-icon-bg p-3 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-white">{scheme.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/80 mb-4">{scheme.description}</p>
                    <ul className="space-y-2">
                      {scheme.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-white mr-2">•</span>
                          <span className="text-white/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full feature-button group">
                      <Link href={`/schemes/${scheme.id}`} className="flex items-center justify-center">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="aspect-video overflow-hidden rounded-lg shadow-xl">
                  <Image 
                    src="https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Planning for retirement"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="section-title">Secure Retirement Planning Made Simple</h2>
              <p className="text-muted-foreground">
                At Standard Pensions Trust, we provide comprehensive tools and expert guidance to help you plan and secure your financial future.
              </p>
              
              <div className="grid grid-cols-1 gap-6 mt-8">
                <div className="feature-card flex gap-4">
                  <div className="feature-icon-bg p-3 h-12 w-12 flex items-center justify-center rounded-lg shrink-0">
                    <Calculator className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Pension Calculator</h3>
                    <p className="text-white/80 text-sm">
                      Plan your retirement with our interactive calculator tool that provides realistic projections.
                    </p>
                  </div>
                </div>
                
                <div className="feature-card flex gap-4">
                  <div className="feature-icon-bg p-3 h-12 w-12 flex items-center justify-center rounded-lg shrink-0">
                    <PieChart className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Investment Strategies</h3>
                    <p className="text-white/80 text-sm">
                      Diverse investment options tailored to your risk profile and retirement timeline.
                    </p>
                  </div>
                </div>
                
                <div className="feature-card flex gap-4">
                  <div className="feature-icon-bg p-3 h-12 w-12 flex items-center justify-center rounded-lg shrink-0">
                    <BarChart className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Fund Performance</h3>
                    <p className="text-white/80 text-sm">
                      Transparent reporting and real-time access to your pension fund performance.
                    </p>
                  </div>
                </div>
                
                <div className="feature-card flex gap-4">
                  <div className="feature-icon-bg p-3 h-12 w-12 flex items-center justify-center rounded-lg shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Self-Service Portal</h3>
                    <p className="text-white/80 text-sm">
                      24/7 access to your pension information through our secure member portal.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button asChild className="feature-button mt-4">
                <Link href="/pension-calculator">Try Our Pension Calculator</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-12">
            <div>
              <h2 className="section-title">Latest Insights</h2>
              <p className="text-muted-foreground max-w-xl">
                Expert advice and insights on retirement planning and pension management.
              </p>
            </div>
            <Button asChild variant="outline" className="mt-4 md:mt-0">
              <Link href="/media/blog">View All Posts</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="feature-card card-hover overflow-hidden">
                <div className="relative h-48">
                  <Image 
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-white/80">
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <CardTitle className="text-white">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 text-sm">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="w-full justify-start p-0 hover:bg-transparent group text-white">
                    <Link href={`/media/blog/${post.id}`} className="flex items-center">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Secure Your Financial Future?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Join thousands of Ghanaians who trust Standard Pensions Trust for their retirement planning.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20 hover:text-white">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/schemes">Explore Our Schemes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tailored Pension Solutions Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailored to meet your pension needs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe everyone deserves a retirement plan as unique as they are. Let us customize a solution for you.
            </p>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>
      
          <Tabs defaultValue="individual" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="individual" className="flex items-center gap-2">
                <User className="h-5 w-5" /> Pensions for Individuals
              </TabsTrigger>
              <TabsTrigger value="organization" className="flex items-center gap-2">
                <Building className="h-5 w-5" /> Pensions With Organizations
              </TabsTrigger>
            </TabsList>
      
            <TabsContent value="individual">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <Landmark className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-semibold">Your Retirement Plan</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Take control of your financial future. Our structured approach helps you build the cushion you need for a comfortable and secure retirement.
                  </p>
                  <Button asChild>
                    <Link href="/schemes/individual">Start Your Retirement Journey</Link>
                  </Button>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image 
                    src="https://images.pexels.com/photos/8867431/pexels-photo-8867431.jpeg" 
                    alt="Individual retirement planning"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
      
            <TabsContent value="organization">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Briefcase className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-semibold">Comprehensive Employee Benefits</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Attract and retain top talent with valuable benefits that extend beyond salary, like essential retirement plan contributions and healthcare coverage.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <BarChart className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-semibold">Optimized Employer Pensions</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Focus on your core business while we handle your pension scheme. Benefit from professional management, reduced fees, and other advantages that support your organization.
                  </p>
                  <Button asChild>
                    <Link href="/schemes/organization">Explore Organizational Solutions</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Standard Pensions Trust Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Standard Pensions Trust
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Don't just make a deposit, make an investment today.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-hover border-white/50 bg-white/10 text-white">
              <CardHeader>
                <CardTitle className="text-xl">Control Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-sm">
                  We have in place rigorous internal control systems as we recognize this as vital for our survival in the fiduciary services business
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-white/50 bg-white/10 text-white">
              <CardHeader>
                <CardTitle className="text-xl">Good Investments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-sm">
                  Our investment team has extensive experience and analytical methodologies to actively identify and exploit investment opportunities as they arise.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-white/50 bg-white/10 text-white">
              <CardHeader>
                <CardTitle className="text-xl">I T Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-sm">
                  We have a top-of-the-range IT platform to improve the efficiency with which we deliver our services, with the use of Web and Mobile Technology as well as USSD.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-white/50 bg-white/10 text-white">
              <CardHeader>
                <CardTitle className="text-xl">Client Involvement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-sm">
                  Our customer-centered approach to service provision enables us to achieve our clients' objectives, as we are able to understand the needs of our clients better.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}