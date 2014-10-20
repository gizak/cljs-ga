(ns ga2.bootstrap
  (:require [ga2.core :as core]
            [om.core :as om]
            [om-tools.core :refer-macros [defcomponent]]
            [om-tools.dom :as dom :include-macros true]))
(enable-console-print!)


;; Core data set
(def app (atom {:text "Hello world!"}))


;; Root component
(defcomponent view-port [app owner]
  (render [_]
          (dom/div {:class "app"}
                   (dom/div {:class "topbar"}))))


;; Automatically start lifecycle
(om/root view-port app
         {:target (. js/document (getElementById "app-container"))})
