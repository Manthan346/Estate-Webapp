import React, { useState } from 'react';
import { MapPin, Phone, Check, Map, Building2, Image as ImageIcon, IndianRupee } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchPropertyDetail } from '../../api';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../components/ui/carousel';
import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"




const PropertyDetails = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [lightboxOpen, setLightboxOpen] = useState(false)
const [lightboxImage, setLightboxImage] = useState(null)
    const [property, setProperty] = useState(null)
    const autoplay = useRef(
        Autoplay({
            delay: 3000,        // 3 seconds
            stopOnInteraction: true,
            stopOnMouseEnter: true,
        })
    )

    const openLightbox = (img) => {
  setLightboxImage(img)
  setLightboxOpen(true)
}

const closeLightbox = () => {
  setLightboxOpen(false)
  setLightboxImage(null)
}


    const [selectedImage, setSelectedImage] = useState(0);

    // API Data
    const [searchParams] = useSearchParams()
    const id = searchParams.get("id")



    useEffect(() => {
        const getProperty = async () => {
            try {
                const response = await fetchPropertyDetail(id)
                setProperty(response.data.data)
            } catch (error) {
                console.error(error)
            }
        }

        if (id) getProperty()
    }, [id])

    if (!property) {
        return (
            <div className="mt-40 text-center text-muted-foreground">
                Loading property details...
            </div>
        )
    }

    const allImages = property
        ? [
            property.heroImage,
            ...(Array.isArray(property.galleryImg) ? property.galleryImg : [])
        ]
        : []

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        alert('Thank you for your inquiry!');
    };

    return (
        <div className="min-h-screen bg-background font-sans mt-20 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column - Property Details */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Hero Image Gallery with Thumbnails */}
                        <div className="space-y-3">
                            <div className="rounded-xl overflow-hidden shadow-lg border border-border">
                                <img
                                    src={allImages[selectedImage]}
                                    alt="Property view"
                                    className="w-full h-[500px] object-cover"
                                    onClick={() => openLightbox(allImages[selectedImage])}
                                />
                            </div>
                            <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                                {allImages.map((img, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`rounded-lg  h-20 overflow-hidden border-2 transition-all ${selectedImage === index
                                            ? 'border-primary shadow-md'
                                            : 'border-border hover:border-muted-foreground'
                                            }`}
                                    >
                                        <img
                                            src={img}
                                            alt={`Gallery ${index + 1}`}
                                            className="w-full h-20 object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Property Info Card */}
                        <div className="bg-card rounded-xl shadow-md p-6 md:p-8  border border-border">
                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 pb-6 border-b border-border">
                                <div className="flex-1 mb-4 md:mb-0">
                                    <div className="flex items-center gap-3 mb-3">
                                        <h1 className="text-3xl md:text-4xl font-bold text-foreground">{property.project.name}</h1>
                                        <span className="bg-primary/10 text-primary px-3 py-1 rounded-lg text-xs font-semibold uppercase">
                                            {property.propertyType}
                                        </span>
                                    </div>
                                    <div className="flex items-center text-muted-foreground">
                                        <MapPin className="w-5 h-5 mr-2 text-primary" />
                                        <span className="text-base">{property.address}, {property.city.name}</span>
                                    </div>
                                </div>
                                <div className="text-left md:text-right">
                                    <div className="flex items-center justify-start md:justify-end">
                                        <IndianRupee className="w-8 h-8 text-primary" />
                                        <span className="text-4xl font-bold text-chart-3">{property.price}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">Starting Price</p>
                                </div>
                            </div>

                            {/* About Section */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-foreground mb-4 flex space-x-2 items-center">
                                    <Building2 className="w-6 h-6 mr-2 text-primary" />
                                    <p className=''>About</p>  <p className='text-chart-3'>Property</p>
                                </h2>
                                <div className="bg-muted/30 rounded-lg p-5">
                                    <p className="text-foreground leading-relaxed whitespace-pre-line">
                                        {property.about}
                                    </p>
                                </div>
                            </div>

                            {/* Facilities Section */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-foreground mb-4 space-x-2 flex items-center">
                                    <Check className="w-6 h-6 mr-2 text-primary" />
                                    <p className=''>Key</p>  <p className='text-chart-3'>Features</p>
                                </h2>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {property.facilities.map((facility, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center bg-muted/30 rounded-lg px-4 py-3 hover:bg-muted/50 transition-colors"
                                        >
                                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                            <span className="text-foreground font-medium">{facility}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Amenities Section */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                                    <ImageIcon className="w-6 h-6 mr-2 text-primary" />
                                    Amenities
                                </h2>
                                <div className="space-y-4">
                                    <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                                        <img
                                            src={property.amenitiesImg}
                                            alt="Amenities"
                                            className="w-full h-full object-cover"
                                            onClick={() => openLightbox(property.amenitiesImg)}
                                        />
                                    </div>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {property.amentiesDescription.map((amenity, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center bg-accent/50 rounded-lg px-4 py-3 hover:bg-accent transition-colors"
                                            >
                                                <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                                                <span className="text-foreground">{amenity}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                          
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                                    <ImageIcon className="w-6 h-6 mr-2 text-primary" />
                                    Highlight
                                </h2>
                                <div className="space-y-4">
                                    <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                                        <img
                                            src={property.highlightImg}
                                            alt="Amenities"
                                            className="w-full h-full object-cover"
                                            onClick={() => openLightbox(property.highlightImg)}
                                        />
                                    </div>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {property.highlightDescription.map((Highlight, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center bg-accent/50 rounded-lg px-4 py-3 hover:bg-accent transition-colors"
                                            >
                                                <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                                                <span className="text-foreground">{Highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Location Section */}
                            <div className="mb-8">
                                <h2 className="text-2xl space-x-2 font-bold text-foreground mb-4 flex items-center">
                                    <Map className="w-6 h-6 mr-2 text-primary" />
                                    <p className=''>Location</p>  <p className='text-chart-3'>Highlights</p>
                                </h2>
                                <div className="space-y-4">
                                    <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                                        <img
                                            src={property.locationMapImg}
                                            alt="Location Map"
                                            className="w-full h-110 object-cover"
                                            onClick={() => openLightbox(property.locationMapImg)}
                                        />
                                    </div>
                                    <ul className="grid grid-cols-1 md:grid-cols-1 gap-3">
                                        {property.locationMapDescription.map((desc, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center bg-secondary/50 rounded-lg px-4 py-3 hover:bg-secondary transition-colors"
                                            >
                                                <MapPin className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                                                <span className="text-foreground">{desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Floor Plans Section */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold space-x-2 text-foreground mb-4 flex items-center">
                                    <Building2 className="w-6 h-6 mr-2 text-primary" />
                                    <p className=''>Floor</p>  <p className='text-chart-3'>Plans</p>
                                </h2>
                                <div className="space-y-6">
                                    {property.floor.map((floor) => (
                                        <div key={floor.id} className="bg-muted/30 rounded-xl p-5 border border-border">
                                            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                                                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mr-3">
                                                    <Building2 className="w-5 h-5 text-primary" />
                                                </div>
                                                {floor.areaName}
                                            </h3>
                                            <div className="rounded-lg overflow-hidden border border-border shadow-sm">
                                                <img
                                                    src={floor.img}
                                                    alt={floor.areaName}
                                                    className="w-full h-auto object-cover"
                                                    onClick={() => openLightbox(floor.img)}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Price List Section */}
                            <div>
                                <h2 className="text-2xl font-bold space-x-2 text-foreground mb-4 flex items-center">
                                    <IndianRupee className="w-6 h-6 mr-2 text-primary" />
                                    <p className=''>Pricing</p>  <p className='text-chart-3'>Details</p>
                                </h2>
                                <div className="bg-muted/30 rounded-xl overflow-hidden border border-border">
                                    <div className="overflow-x-auto">
                                        <table className="w-full">
                                            <thead className="bg-primary/10">
                                                <tr>
                                                    <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Typology</th>
                                                    <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Size</th>
                                                    <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {property.priceList.map((item, index) => (
                                                    <tr
                                                        key={item.id}
                                                        className={`${index !== property.priceList.length - 1 ? 'border-b border-border' : ''} hover:bg-muted/20 transition-colors`}
                                                    >
                                                        <td className="px-6 py-4 text-foreground font-medium">{item.typology}</td>
                                                        <td className="px-6 py-4 text-foreground">{item.size}</td>
                                                        <td className="px-6 py-4">
                                                            <span className="text-primary font-bold text-lg">₹{item.price}</span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            {/* PROPERTY GALLERY CAROUSEL */}
                            <div className="mb-12 mt-5">
                                <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                                    <ImageIcon className="w-6 h-6 mr-2 text-primary" />
                                    <span>Property</span>
                                    <span className="text-chart-3 ml-2">Gallery</span>
                                </h2>

                                <Carousel
                                    plugins={[autoplay.current]}
                                    opts={{ align: "center", loop: true }}
                                    className="w-full max-w-4xl"
                                >
                                    <CarouselContent className="-ml-4">
                                        {property.galleryImg.map((img, index) => (
                                            <CarouselItem
                                                key={index}
                                                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                                            >
                                                <div className="overflow-hidden rounded-xl border border-border shadow-sm">
                                                    <img
                                                        src={img}
                                                        alt={`Property Gallery ${index + 1}`}
                                                        className="w-full h-[260px] object-cover hover:scale-105 transition-transform duration-300"
                                                         onClick={() => openLightbox(img)}
                                                    />
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    
                                </Carousel>
                            </div>

                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className="lg:col-span-1">
                        <div className="bg-card rounded-xl shadow-md p-6 sticky top-8 border border-border">
                            {/* Contact Info Header */}
                            <div className="mb-6 pb-6 border-b border-border">
                                <h3 className="text-xl font-bold text-foreground mb-4">Get in Touch</h3>
                                <div className="flex items-center bg-primary/10 rounded-lg px-4 py-3">
                                    <Phone className="w-5 h-5 mr-3 text-primary" />
                                    <div>
                                        <p className="text-xs text-muted-foreground mb-1">Call us at</p>
                                        <p className="font-bold text-foreground">{property.phoneNum}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-semibold text-foreground mb-2">Full Name</label>
                                    <Input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-foreground mb-2">Email Address</label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="youremail@gmail.com"
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                                    <Input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="+91"
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Tell us about your requirements..."
                                        rows="5"
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-all"
                                    />
                                </div>

                                <Button
                                    onClick={handleSubmit}
                                    className="w-full bg-chart-3 text-primary-foreground py-3.5 rounded-full font-semibold hover:opacity-90 transition-all shadow-sm hover:shadow-md"
                                >
                                    Submit Inquiry
                                </Button>
                            </div>
                        </div>

                    </div>
                </div>
                <div>

                </div>



            </div>
            {lightboxOpen && (
  <div
    className="fixed inset-0 z-[9999] bg-foreground/90 flex items-center justify-center p-4"
    onClick={closeLightbox}
  >
    {/* Close Button */}
    <button
      onClick={closeLightbox}
      className="absolute top-6 right-6  text-background text-3xl font-bold"
    >
      ×
    </button>

    {/* Image */}
    <img
      src={lightboxImage}
      alt="Preview"
      onClick={(e) => e.stopPropagation()}
      className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
    />
  </div>
)}

        </div>
    );
};

export default PropertyDetails;