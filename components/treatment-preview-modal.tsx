"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Sparkles, CheckCircle2, Calendar, Clock, Zap } from "lucide-react"
import { getTreatmentPreviewData } from "@/lib/treatment-preview-data"

interface TreatmentPreviewModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  treatmentHref: string
  treatmentLabel: string
  onAppointmentClick?: () => void
}

export default function TreatmentPreviewModal({
  open,
  onOpenChange,
  treatmentHref,
  treatmentLabel,
  onAppointmentClick,
}: TreatmentPreviewModalProps) {
  const previewData = getTreatmentPreviewData(treatmentHref, treatmentLabel)

  const handleBookAppointment = () => {
    onOpenChange(false)
    if (onAppointmentClick) {
      onAppointmentClick()
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
              <Sparkles className="text-white" size={24} />
            </div>
            <DialogTitle className="text-2xl font-bold text-emerald-700">
              {previewData.title}
            </DialogTitle>
          </div>
          <DialogDescription className="text-base text-gray-600 pt-2">
            AI-Generated Treatment Preview
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* AI Insights Section */}
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-200">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="text-emerald-600" size={20} />
              <h3 className="text-lg font-bold text-emerald-700">AI-Powered Insights</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">{previewData.description}</p>
          </div>

          {/* Key Highlights */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Zap className="text-emerald-600" size={20} />
              Key Highlights
            </h3>
            <ul className="space-y-3">
              {previewData.highlights.map((highlight, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <CheckCircle2 className="text-emerald-600 flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Facts */}
          <div className="grid grid-cols-2 gap-4">
            {previewData.duration && (
              <div className="bg-white rounded-lg p-4 border border-emerald-100">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="text-emerald-600" size={18} />
                  <span className="text-sm font-semibold text-gray-700">Duration</span>
                </div>
                <p className="text-gray-600 text-sm">{previewData.duration}</p>
              </div>
            )}
            {previewData.complexity && (
              <div className="bg-white rounded-lg p-4 border border-emerald-100">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="text-emerald-600" size={18} />
                  <span className="text-sm font-semibold text-gray-700">Complexity</span>
                </div>
                <p className="text-gray-600 text-sm">{previewData.complexity}</p>
              </div>
            )}
          </div>

          {/* AI Recommendation */}
          {previewData.recommendation && (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border border-green-200">
              <div className="flex items-start gap-3">
                <Sparkles className="text-green-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-bold text-green-900 mb-2">AI Recommendation</h4>
                  <p className="text-green-800 text-sm leading-relaxed">{previewData.recommendation}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <DialogFooter className="gap-3">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="border-emerald-200 text-emerald-700 hover:bg-emerald-50"
          >
            Close
          </Button>
          <Button
            onClick={handleBookAppointment}
            className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white"
          >
            <Calendar className="mr-2" size={18} />
            Book Appointment
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}



