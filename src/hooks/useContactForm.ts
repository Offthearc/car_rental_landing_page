import { useState } from 'react'

export interface ContactFormData {
  name: string
  email: string
  message: string
}

interface UseContactFormResult {
  fields: ContactFormData
  errors: Partial<ContactFormData>
  submitted: boolean
  handleChange: (field: keyof ContactFormData, value: string) => void
  handleSubmit: (e: React.FormEvent) => void
}

export function useContactForm(): UseContactFormResult {
  const [fields, setFields] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<ContactFormData>>({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(field: keyof ContactFormData, value: string) {
    setFields((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const newErrors: Partial<ContactFormData> = {}

    if (!fields.name.trim()) {
      newErrors.name = 'Name is required.'
    }
    if (!fields.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!fields.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!fields.message.trim()) {
      newErrors.message = 'Message is required.'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setSubmitted(true)
  }

  return { fields, errors, submitted, handleChange, handleSubmit }
}
