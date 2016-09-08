<?php

global $metaboxes;


$test_fields = array();
$field_types = array( "text", "url", "integer", "float", "date", "time", "textarea" );

foreach ($field_types as $field_type ) {
   $test_fields[] = array(
      'field_name'            => 'test-metabox-'. $field_type .'-field',
      'field_type'            => ''. $field_type .'',
      'repeatable'            => false,
      'field_label'           => ucfirst( $field_type ) . ' Field',
      'description'           => 'A ' .$field_type .' field.',
      'markup_function'       => 'standard_metabox_html'
   );

}

$metaboxes = array(

   'test-metabox'=>array(

      'post_type'    => 'test-cpt',
      'name'         => 'test-cpt-metabox',
      'title'        => 'Test CPT Metabox',

      'description'  => 'Fill in Custom Fields',

      'fields' => $test_fields
   ),

   'date-cpt-date-metabox'=>array(

      'post_type'    => 'date-cpt',
      'name'         => 'date-cpt-metabox',
      'title'        => 'Date CPT Metabox',

      'description'  => 'Fill in Date',

      'fields' => array(

         array(
            'field_name'            => 'test-cpt-date',
            'field_type'            => 'date',
            'repeatable'            => false,
            'field_label'           => 'Date Field',
            'description'           => 'A date field.',
            'markup_function'       => 'standard_metabox_html'
         ),


      )
   ),




);


?>
