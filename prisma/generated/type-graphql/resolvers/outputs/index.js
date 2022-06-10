"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentMinAggregate = exports.CommentMaxAggregate = exports.CommentGroupBy = exports.CommentCountAggregate = exports.CommentCount = exports.ColorMinAggregate = exports.ColorMaxAggregate = exports.ColorGroupBy = exports.ColorCountAggregate = exports.ColorCount = exports.BrandProductMinAggregate = exports.BrandProductMaxAggregate = exports.BrandProductGroupBy = exports.BrandProductCountAggregate = exports.BrandProductCount = exports.BrandMinAggregate = exports.BrandMaxAggregate = exports.BrandGroupBy = exports.BrandCountAggregate = exports.BrandCount = exports.ArtworkMinAggregate = exports.ArtworkMaxAggregate = exports.ArtworkGroupBy = exports.ArtworkCountAggregate = exports.ArtworkCount = exports.AggregateUser = exports.AggregateSize = exports.AggregateShippingMethod = exports.AggregateReply = exports.AggregateReaction = exports.AggregateProduct = exports.AggregatePrice = exports.AggregatePost = exports.AggregateOrderLineItem = exports.AggregateOrder = exports.AggregateNotificationSettings = exports.AggregateInventory = exports.AggregateCurrency = exports.AggregateComment = exports.AggregateColor = exports.AggregateBrandProduct = exports.AggregateBrand = exports.AggregateArtwork = exports.AggregateAddress = exports.AffectedRowsOutput = exports.AddressMinAggregate = exports.AddressMaxAggregate = exports.AddressGroupBy = exports.AddressCountAggregate = exports.AddressCount = void 0;
exports.ReplyMaxAggregate = exports.ReplyGroupBy = exports.ReplyCountAggregate = exports.ReplyCount = exports.ReactionMinAggregate = exports.ReactionMaxAggregate = exports.ReactionGroupBy = exports.ReactionCountAggregate = exports.ProductSumAggregate = exports.ProductMinAggregate = exports.ProductMaxAggregate = exports.ProductGroupBy = exports.ProductCountAggregate = exports.ProductCount = exports.ProductAvgAggregate = exports.PriceSumAggregate = exports.PriceMinAggregate = exports.PriceMaxAggregate = exports.PriceGroupBy = exports.PriceCountAggregate = exports.PriceCount = exports.PriceAvgAggregate = exports.PostMinAggregate = exports.PostMaxAggregate = exports.PostGroupBy = exports.PostCountAggregate = exports.PostCount = exports.OrderMinAggregate = exports.OrderMaxAggregate = exports.OrderLineItemMinAggregate = exports.OrderLineItemMaxAggregate = exports.OrderLineItemGroupBy = exports.OrderLineItemCountAggregate = exports.OrderGroupBy = exports.OrderCountAggregate = exports.OrderCount = exports.NotificationSettingsMinAggregate = exports.NotificationSettingsMaxAggregate = exports.NotificationSettingsGroupBy = exports.NotificationSettingsCountAggregate = exports.InventoryMinAggregate = exports.InventoryMaxAggregate = exports.InventoryGroupBy = exports.InventoryCountAggregate = exports.InventoryCount = exports.CurrencyMinAggregate = exports.CurrencyMaxAggregate = exports.CurrencyGroupBy = exports.CurrencyCountAggregate = exports.CurrencyCount = void 0;
exports.UserMinAggregate = exports.UserMaxAggregate = exports.UserGroupBy = exports.UserCountAggregate = exports.UserCount = exports.SizeMinAggregate = exports.SizeMaxAggregate = exports.SizeGroupBy = exports.SizeCountAggregate = exports.SizeCount = exports.ShippingMethodSumAggregate = exports.ShippingMethodMinAggregate = exports.ShippingMethodMaxAggregate = exports.ShippingMethodGroupBy = exports.ShippingMethodCountAggregate = exports.ShippingMethodCount = exports.ShippingMethodAvgAggregate = exports.ReplyMinAggregate = void 0;
var AddressCount_1 = require("./AddressCount");
Object.defineProperty(exports, "AddressCount", { enumerable: true, get: function () { return AddressCount_1.AddressCount; } });
var AddressCountAggregate_1 = require("./AddressCountAggregate");
Object.defineProperty(exports, "AddressCountAggregate", { enumerable: true, get: function () { return AddressCountAggregate_1.AddressCountAggregate; } });
var AddressGroupBy_1 = require("./AddressGroupBy");
Object.defineProperty(exports, "AddressGroupBy", { enumerable: true, get: function () { return AddressGroupBy_1.AddressGroupBy; } });
var AddressMaxAggregate_1 = require("./AddressMaxAggregate");
Object.defineProperty(exports, "AddressMaxAggregate", { enumerable: true, get: function () { return AddressMaxAggregate_1.AddressMaxAggregate; } });
var AddressMinAggregate_1 = require("./AddressMinAggregate");
Object.defineProperty(exports, "AddressMinAggregate", { enumerable: true, get: function () { return AddressMinAggregate_1.AddressMinAggregate; } });
var AffectedRowsOutput_1 = require("./AffectedRowsOutput");
Object.defineProperty(exports, "AffectedRowsOutput", { enumerable: true, get: function () { return AffectedRowsOutput_1.AffectedRowsOutput; } });
var AggregateAddress_1 = require("./AggregateAddress");
Object.defineProperty(exports, "AggregateAddress", { enumerable: true, get: function () { return AggregateAddress_1.AggregateAddress; } });
var AggregateArtwork_1 = require("./AggregateArtwork");
Object.defineProperty(exports, "AggregateArtwork", { enumerable: true, get: function () { return AggregateArtwork_1.AggregateArtwork; } });
var AggregateBrand_1 = require("./AggregateBrand");
Object.defineProperty(exports, "AggregateBrand", { enumerable: true, get: function () { return AggregateBrand_1.AggregateBrand; } });
var AggregateBrandProduct_1 = require("./AggregateBrandProduct");
Object.defineProperty(exports, "AggregateBrandProduct", { enumerable: true, get: function () { return AggregateBrandProduct_1.AggregateBrandProduct; } });
var AggregateColor_1 = require("./AggregateColor");
Object.defineProperty(exports, "AggregateColor", { enumerable: true, get: function () { return AggregateColor_1.AggregateColor; } });
var AggregateComment_1 = require("./AggregateComment");
Object.defineProperty(exports, "AggregateComment", { enumerable: true, get: function () { return AggregateComment_1.AggregateComment; } });
var AggregateCurrency_1 = require("./AggregateCurrency");
Object.defineProperty(exports, "AggregateCurrency", { enumerable: true, get: function () { return AggregateCurrency_1.AggregateCurrency; } });
var AggregateInventory_1 = require("./AggregateInventory");
Object.defineProperty(exports, "AggregateInventory", { enumerable: true, get: function () { return AggregateInventory_1.AggregateInventory; } });
var AggregateNotificationSettings_1 = require("./AggregateNotificationSettings");
Object.defineProperty(exports, "AggregateNotificationSettings", { enumerable: true, get: function () { return AggregateNotificationSettings_1.AggregateNotificationSettings; } });
var AggregateOrder_1 = require("./AggregateOrder");
Object.defineProperty(exports, "AggregateOrder", { enumerable: true, get: function () { return AggregateOrder_1.AggregateOrder; } });
var AggregateOrderLineItem_1 = require("./AggregateOrderLineItem");
Object.defineProperty(exports, "AggregateOrderLineItem", { enumerable: true, get: function () { return AggregateOrderLineItem_1.AggregateOrderLineItem; } });
var AggregatePost_1 = require("./AggregatePost");
Object.defineProperty(exports, "AggregatePost", { enumerable: true, get: function () { return AggregatePost_1.AggregatePost; } });
var AggregatePrice_1 = require("./AggregatePrice");
Object.defineProperty(exports, "AggregatePrice", { enumerable: true, get: function () { return AggregatePrice_1.AggregatePrice; } });
var AggregateProduct_1 = require("./AggregateProduct");
Object.defineProperty(exports, "AggregateProduct", { enumerable: true, get: function () { return AggregateProduct_1.AggregateProduct; } });
var AggregateReaction_1 = require("./AggregateReaction");
Object.defineProperty(exports, "AggregateReaction", { enumerable: true, get: function () { return AggregateReaction_1.AggregateReaction; } });
var AggregateReply_1 = require("./AggregateReply");
Object.defineProperty(exports, "AggregateReply", { enumerable: true, get: function () { return AggregateReply_1.AggregateReply; } });
var AggregateShippingMethod_1 = require("./AggregateShippingMethod");
Object.defineProperty(exports, "AggregateShippingMethod", { enumerable: true, get: function () { return AggregateShippingMethod_1.AggregateShippingMethod; } });
var AggregateSize_1 = require("./AggregateSize");
Object.defineProperty(exports, "AggregateSize", { enumerable: true, get: function () { return AggregateSize_1.AggregateSize; } });
var AggregateUser_1 = require("./AggregateUser");
Object.defineProperty(exports, "AggregateUser", { enumerable: true, get: function () { return AggregateUser_1.AggregateUser; } });
var ArtworkCount_1 = require("./ArtworkCount");
Object.defineProperty(exports, "ArtworkCount", { enumerable: true, get: function () { return ArtworkCount_1.ArtworkCount; } });
var ArtworkCountAggregate_1 = require("./ArtworkCountAggregate");
Object.defineProperty(exports, "ArtworkCountAggregate", { enumerable: true, get: function () { return ArtworkCountAggregate_1.ArtworkCountAggregate; } });
var ArtworkGroupBy_1 = require("./ArtworkGroupBy");
Object.defineProperty(exports, "ArtworkGroupBy", { enumerable: true, get: function () { return ArtworkGroupBy_1.ArtworkGroupBy; } });
var ArtworkMaxAggregate_1 = require("./ArtworkMaxAggregate");
Object.defineProperty(exports, "ArtworkMaxAggregate", { enumerable: true, get: function () { return ArtworkMaxAggregate_1.ArtworkMaxAggregate; } });
var ArtworkMinAggregate_1 = require("./ArtworkMinAggregate");
Object.defineProperty(exports, "ArtworkMinAggregate", { enumerable: true, get: function () { return ArtworkMinAggregate_1.ArtworkMinAggregate; } });
var BrandCount_1 = require("./BrandCount");
Object.defineProperty(exports, "BrandCount", { enumerable: true, get: function () { return BrandCount_1.BrandCount; } });
var BrandCountAggregate_1 = require("./BrandCountAggregate");
Object.defineProperty(exports, "BrandCountAggregate", { enumerable: true, get: function () { return BrandCountAggregate_1.BrandCountAggregate; } });
var BrandGroupBy_1 = require("./BrandGroupBy");
Object.defineProperty(exports, "BrandGroupBy", { enumerable: true, get: function () { return BrandGroupBy_1.BrandGroupBy; } });
var BrandMaxAggregate_1 = require("./BrandMaxAggregate");
Object.defineProperty(exports, "BrandMaxAggregate", { enumerable: true, get: function () { return BrandMaxAggregate_1.BrandMaxAggregate; } });
var BrandMinAggregate_1 = require("./BrandMinAggregate");
Object.defineProperty(exports, "BrandMinAggregate", { enumerable: true, get: function () { return BrandMinAggregate_1.BrandMinAggregate; } });
var BrandProductCount_1 = require("./BrandProductCount");
Object.defineProperty(exports, "BrandProductCount", { enumerable: true, get: function () { return BrandProductCount_1.BrandProductCount; } });
var BrandProductCountAggregate_1 = require("./BrandProductCountAggregate");
Object.defineProperty(exports, "BrandProductCountAggregate", { enumerable: true, get: function () { return BrandProductCountAggregate_1.BrandProductCountAggregate; } });
var BrandProductGroupBy_1 = require("./BrandProductGroupBy");
Object.defineProperty(exports, "BrandProductGroupBy", { enumerable: true, get: function () { return BrandProductGroupBy_1.BrandProductGroupBy; } });
var BrandProductMaxAggregate_1 = require("./BrandProductMaxAggregate");
Object.defineProperty(exports, "BrandProductMaxAggregate", { enumerable: true, get: function () { return BrandProductMaxAggregate_1.BrandProductMaxAggregate; } });
var BrandProductMinAggregate_1 = require("./BrandProductMinAggregate");
Object.defineProperty(exports, "BrandProductMinAggregate", { enumerable: true, get: function () { return BrandProductMinAggregate_1.BrandProductMinAggregate; } });
var ColorCount_1 = require("./ColorCount");
Object.defineProperty(exports, "ColorCount", { enumerable: true, get: function () { return ColorCount_1.ColorCount; } });
var ColorCountAggregate_1 = require("./ColorCountAggregate");
Object.defineProperty(exports, "ColorCountAggregate", { enumerable: true, get: function () { return ColorCountAggregate_1.ColorCountAggregate; } });
var ColorGroupBy_1 = require("./ColorGroupBy");
Object.defineProperty(exports, "ColorGroupBy", { enumerable: true, get: function () { return ColorGroupBy_1.ColorGroupBy; } });
var ColorMaxAggregate_1 = require("./ColorMaxAggregate");
Object.defineProperty(exports, "ColorMaxAggregate", { enumerable: true, get: function () { return ColorMaxAggregate_1.ColorMaxAggregate; } });
var ColorMinAggregate_1 = require("./ColorMinAggregate");
Object.defineProperty(exports, "ColorMinAggregate", { enumerable: true, get: function () { return ColorMinAggregate_1.ColorMinAggregate; } });
var CommentCount_1 = require("./CommentCount");
Object.defineProperty(exports, "CommentCount", { enumerable: true, get: function () { return CommentCount_1.CommentCount; } });
var CommentCountAggregate_1 = require("./CommentCountAggregate");
Object.defineProperty(exports, "CommentCountAggregate", { enumerable: true, get: function () { return CommentCountAggregate_1.CommentCountAggregate; } });
var CommentGroupBy_1 = require("./CommentGroupBy");
Object.defineProperty(exports, "CommentGroupBy", { enumerable: true, get: function () { return CommentGroupBy_1.CommentGroupBy; } });
var CommentMaxAggregate_1 = require("./CommentMaxAggregate");
Object.defineProperty(exports, "CommentMaxAggregate", { enumerable: true, get: function () { return CommentMaxAggregate_1.CommentMaxAggregate; } });
var CommentMinAggregate_1 = require("./CommentMinAggregate");
Object.defineProperty(exports, "CommentMinAggregate", { enumerable: true, get: function () { return CommentMinAggregate_1.CommentMinAggregate; } });
var CurrencyCount_1 = require("./CurrencyCount");
Object.defineProperty(exports, "CurrencyCount", { enumerable: true, get: function () { return CurrencyCount_1.CurrencyCount; } });
var CurrencyCountAggregate_1 = require("./CurrencyCountAggregate");
Object.defineProperty(exports, "CurrencyCountAggregate", { enumerable: true, get: function () { return CurrencyCountAggregate_1.CurrencyCountAggregate; } });
var CurrencyGroupBy_1 = require("./CurrencyGroupBy");
Object.defineProperty(exports, "CurrencyGroupBy", { enumerable: true, get: function () { return CurrencyGroupBy_1.CurrencyGroupBy; } });
var CurrencyMaxAggregate_1 = require("./CurrencyMaxAggregate");
Object.defineProperty(exports, "CurrencyMaxAggregate", { enumerable: true, get: function () { return CurrencyMaxAggregate_1.CurrencyMaxAggregate; } });
var CurrencyMinAggregate_1 = require("./CurrencyMinAggregate");
Object.defineProperty(exports, "CurrencyMinAggregate", { enumerable: true, get: function () { return CurrencyMinAggregate_1.CurrencyMinAggregate; } });
var InventoryCount_1 = require("./InventoryCount");
Object.defineProperty(exports, "InventoryCount", { enumerable: true, get: function () { return InventoryCount_1.InventoryCount; } });
var InventoryCountAggregate_1 = require("./InventoryCountAggregate");
Object.defineProperty(exports, "InventoryCountAggregate", { enumerable: true, get: function () { return InventoryCountAggregate_1.InventoryCountAggregate; } });
var InventoryGroupBy_1 = require("./InventoryGroupBy");
Object.defineProperty(exports, "InventoryGroupBy", { enumerable: true, get: function () { return InventoryGroupBy_1.InventoryGroupBy; } });
var InventoryMaxAggregate_1 = require("./InventoryMaxAggregate");
Object.defineProperty(exports, "InventoryMaxAggregate", { enumerable: true, get: function () { return InventoryMaxAggregate_1.InventoryMaxAggregate; } });
var InventoryMinAggregate_1 = require("./InventoryMinAggregate");
Object.defineProperty(exports, "InventoryMinAggregate", { enumerable: true, get: function () { return InventoryMinAggregate_1.InventoryMinAggregate; } });
var NotificationSettingsCountAggregate_1 = require("./NotificationSettingsCountAggregate");
Object.defineProperty(exports, "NotificationSettingsCountAggregate", { enumerable: true, get: function () { return NotificationSettingsCountAggregate_1.NotificationSettingsCountAggregate; } });
var NotificationSettingsGroupBy_1 = require("./NotificationSettingsGroupBy");
Object.defineProperty(exports, "NotificationSettingsGroupBy", { enumerable: true, get: function () { return NotificationSettingsGroupBy_1.NotificationSettingsGroupBy; } });
var NotificationSettingsMaxAggregate_1 = require("./NotificationSettingsMaxAggregate");
Object.defineProperty(exports, "NotificationSettingsMaxAggregate", { enumerable: true, get: function () { return NotificationSettingsMaxAggregate_1.NotificationSettingsMaxAggregate; } });
var NotificationSettingsMinAggregate_1 = require("./NotificationSettingsMinAggregate");
Object.defineProperty(exports, "NotificationSettingsMinAggregate", { enumerable: true, get: function () { return NotificationSettingsMinAggregate_1.NotificationSettingsMinAggregate; } });
var OrderCount_1 = require("./OrderCount");
Object.defineProperty(exports, "OrderCount", { enumerable: true, get: function () { return OrderCount_1.OrderCount; } });
var OrderCountAggregate_1 = require("./OrderCountAggregate");
Object.defineProperty(exports, "OrderCountAggregate", { enumerable: true, get: function () { return OrderCountAggregate_1.OrderCountAggregate; } });
var OrderGroupBy_1 = require("./OrderGroupBy");
Object.defineProperty(exports, "OrderGroupBy", { enumerable: true, get: function () { return OrderGroupBy_1.OrderGroupBy; } });
var OrderLineItemCountAggregate_1 = require("./OrderLineItemCountAggregate");
Object.defineProperty(exports, "OrderLineItemCountAggregate", { enumerable: true, get: function () { return OrderLineItemCountAggregate_1.OrderLineItemCountAggregate; } });
var OrderLineItemGroupBy_1 = require("./OrderLineItemGroupBy");
Object.defineProperty(exports, "OrderLineItemGroupBy", { enumerable: true, get: function () { return OrderLineItemGroupBy_1.OrderLineItemGroupBy; } });
var OrderLineItemMaxAggregate_1 = require("./OrderLineItemMaxAggregate");
Object.defineProperty(exports, "OrderLineItemMaxAggregate", { enumerable: true, get: function () { return OrderLineItemMaxAggregate_1.OrderLineItemMaxAggregate; } });
var OrderLineItemMinAggregate_1 = require("./OrderLineItemMinAggregate");
Object.defineProperty(exports, "OrderLineItemMinAggregate", { enumerable: true, get: function () { return OrderLineItemMinAggregate_1.OrderLineItemMinAggregate; } });
var OrderMaxAggregate_1 = require("./OrderMaxAggregate");
Object.defineProperty(exports, "OrderMaxAggregate", { enumerable: true, get: function () { return OrderMaxAggregate_1.OrderMaxAggregate; } });
var OrderMinAggregate_1 = require("./OrderMinAggregate");
Object.defineProperty(exports, "OrderMinAggregate", { enumerable: true, get: function () { return OrderMinAggregate_1.OrderMinAggregate; } });
var PostCount_1 = require("./PostCount");
Object.defineProperty(exports, "PostCount", { enumerable: true, get: function () { return PostCount_1.PostCount; } });
var PostCountAggregate_1 = require("./PostCountAggregate");
Object.defineProperty(exports, "PostCountAggregate", { enumerable: true, get: function () { return PostCountAggregate_1.PostCountAggregate; } });
var PostGroupBy_1 = require("./PostGroupBy");
Object.defineProperty(exports, "PostGroupBy", { enumerable: true, get: function () { return PostGroupBy_1.PostGroupBy; } });
var PostMaxAggregate_1 = require("./PostMaxAggregate");
Object.defineProperty(exports, "PostMaxAggregate", { enumerable: true, get: function () { return PostMaxAggregate_1.PostMaxAggregate; } });
var PostMinAggregate_1 = require("./PostMinAggregate");
Object.defineProperty(exports, "PostMinAggregate", { enumerable: true, get: function () { return PostMinAggregate_1.PostMinAggregate; } });
var PriceAvgAggregate_1 = require("./PriceAvgAggregate");
Object.defineProperty(exports, "PriceAvgAggregate", { enumerable: true, get: function () { return PriceAvgAggregate_1.PriceAvgAggregate; } });
var PriceCount_1 = require("./PriceCount");
Object.defineProperty(exports, "PriceCount", { enumerable: true, get: function () { return PriceCount_1.PriceCount; } });
var PriceCountAggregate_1 = require("./PriceCountAggregate");
Object.defineProperty(exports, "PriceCountAggregate", { enumerable: true, get: function () { return PriceCountAggregate_1.PriceCountAggregate; } });
var PriceGroupBy_1 = require("./PriceGroupBy");
Object.defineProperty(exports, "PriceGroupBy", { enumerable: true, get: function () { return PriceGroupBy_1.PriceGroupBy; } });
var PriceMaxAggregate_1 = require("./PriceMaxAggregate");
Object.defineProperty(exports, "PriceMaxAggregate", { enumerable: true, get: function () { return PriceMaxAggregate_1.PriceMaxAggregate; } });
var PriceMinAggregate_1 = require("./PriceMinAggregate");
Object.defineProperty(exports, "PriceMinAggregate", { enumerable: true, get: function () { return PriceMinAggregate_1.PriceMinAggregate; } });
var PriceSumAggregate_1 = require("./PriceSumAggregate");
Object.defineProperty(exports, "PriceSumAggregate", { enumerable: true, get: function () { return PriceSumAggregate_1.PriceSumAggregate; } });
var ProductAvgAggregate_1 = require("./ProductAvgAggregate");
Object.defineProperty(exports, "ProductAvgAggregate", { enumerable: true, get: function () { return ProductAvgAggregate_1.ProductAvgAggregate; } });
var ProductCount_1 = require("./ProductCount");
Object.defineProperty(exports, "ProductCount", { enumerable: true, get: function () { return ProductCount_1.ProductCount; } });
var ProductCountAggregate_1 = require("./ProductCountAggregate");
Object.defineProperty(exports, "ProductCountAggregate", { enumerable: true, get: function () { return ProductCountAggregate_1.ProductCountAggregate; } });
var ProductGroupBy_1 = require("./ProductGroupBy");
Object.defineProperty(exports, "ProductGroupBy", { enumerable: true, get: function () { return ProductGroupBy_1.ProductGroupBy; } });
var ProductMaxAggregate_1 = require("./ProductMaxAggregate");
Object.defineProperty(exports, "ProductMaxAggregate", { enumerable: true, get: function () { return ProductMaxAggregate_1.ProductMaxAggregate; } });
var ProductMinAggregate_1 = require("./ProductMinAggregate");
Object.defineProperty(exports, "ProductMinAggregate", { enumerable: true, get: function () { return ProductMinAggregate_1.ProductMinAggregate; } });
var ProductSumAggregate_1 = require("./ProductSumAggregate");
Object.defineProperty(exports, "ProductSumAggregate", { enumerable: true, get: function () { return ProductSumAggregate_1.ProductSumAggregate; } });
var ReactionCountAggregate_1 = require("./ReactionCountAggregate");
Object.defineProperty(exports, "ReactionCountAggregate", { enumerable: true, get: function () { return ReactionCountAggregate_1.ReactionCountAggregate; } });
var ReactionGroupBy_1 = require("./ReactionGroupBy");
Object.defineProperty(exports, "ReactionGroupBy", { enumerable: true, get: function () { return ReactionGroupBy_1.ReactionGroupBy; } });
var ReactionMaxAggregate_1 = require("./ReactionMaxAggregate");
Object.defineProperty(exports, "ReactionMaxAggregate", { enumerable: true, get: function () { return ReactionMaxAggregate_1.ReactionMaxAggregate; } });
var ReactionMinAggregate_1 = require("./ReactionMinAggregate");
Object.defineProperty(exports, "ReactionMinAggregate", { enumerable: true, get: function () { return ReactionMinAggregate_1.ReactionMinAggregate; } });
var ReplyCount_1 = require("./ReplyCount");
Object.defineProperty(exports, "ReplyCount", { enumerable: true, get: function () { return ReplyCount_1.ReplyCount; } });
var ReplyCountAggregate_1 = require("./ReplyCountAggregate");
Object.defineProperty(exports, "ReplyCountAggregate", { enumerable: true, get: function () { return ReplyCountAggregate_1.ReplyCountAggregate; } });
var ReplyGroupBy_1 = require("./ReplyGroupBy");
Object.defineProperty(exports, "ReplyGroupBy", { enumerable: true, get: function () { return ReplyGroupBy_1.ReplyGroupBy; } });
var ReplyMaxAggregate_1 = require("./ReplyMaxAggregate");
Object.defineProperty(exports, "ReplyMaxAggregate", { enumerable: true, get: function () { return ReplyMaxAggregate_1.ReplyMaxAggregate; } });
var ReplyMinAggregate_1 = require("./ReplyMinAggregate");
Object.defineProperty(exports, "ReplyMinAggregate", { enumerable: true, get: function () { return ReplyMinAggregate_1.ReplyMinAggregate; } });
var ShippingMethodAvgAggregate_1 = require("./ShippingMethodAvgAggregate");
Object.defineProperty(exports, "ShippingMethodAvgAggregate", { enumerable: true, get: function () { return ShippingMethodAvgAggregate_1.ShippingMethodAvgAggregate; } });
var ShippingMethodCount_1 = require("./ShippingMethodCount");
Object.defineProperty(exports, "ShippingMethodCount", { enumerable: true, get: function () { return ShippingMethodCount_1.ShippingMethodCount; } });
var ShippingMethodCountAggregate_1 = require("./ShippingMethodCountAggregate");
Object.defineProperty(exports, "ShippingMethodCountAggregate", { enumerable: true, get: function () { return ShippingMethodCountAggregate_1.ShippingMethodCountAggregate; } });
var ShippingMethodGroupBy_1 = require("./ShippingMethodGroupBy");
Object.defineProperty(exports, "ShippingMethodGroupBy", { enumerable: true, get: function () { return ShippingMethodGroupBy_1.ShippingMethodGroupBy; } });
var ShippingMethodMaxAggregate_1 = require("./ShippingMethodMaxAggregate");
Object.defineProperty(exports, "ShippingMethodMaxAggregate", { enumerable: true, get: function () { return ShippingMethodMaxAggregate_1.ShippingMethodMaxAggregate; } });
var ShippingMethodMinAggregate_1 = require("./ShippingMethodMinAggregate");
Object.defineProperty(exports, "ShippingMethodMinAggregate", { enumerable: true, get: function () { return ShippingMethodMinAggregate_1.ShippingMethodMinAggregate; } });
var ShippingMethodSumAggregate_1 = require("./ShippingMethodSumAggregate");
Object.defineProperty(exports, "ShippingMethodSumAggregate", { enumerable: true, get: function () { return ShippingMethodSumAggregate_1.ShippingMethodSumAggregate; } });
var SizeCount_1 = require("./SizeCount");
Object.defineProperty(exports, "SizeCount", { enumerable: true, get: function () { return SizeCount_1.SizeCount; } });
var SizeCountAggregate_1 = require("./SizeCountAggregate");
Object.defineProperty(exports, "SizeCountAggregate", { enumerable: true, get: function () { return SizeCountAggregate_1.SizeCountAggregate; } });
var SizeGroupBy_1 = require("./SizeGroupBy");
Object.defineProperty(exports, "SizeGroupBy", { enumerable: true, get: function () { return SizeGroupBy_1.SizeGroupBy; } });
var SizeMaxAggregate_1 = require("./SizeMaxAggregate");
Object.defineProperty(exports, "SizeMaxAggregate", { enumerable: true, get: function () { return SizeMaxAggregate_1.SizeMaxAggregate; } });
var SizeMinAggregate_1 = require("./SizeMinAggregate");
Object.defineProperty(exports, "SizeMinAggregate", { enumerable: true, get: function () { return SizeMinAggregate_1.SizeMinAggregate; } });
var UserCount_1 = require("./UserCount");
Object.defineProperty(exports, "UserCount", { enumerable: true, get: function () { return UserCount_1.UserCount; } });
var UserCountAggregate_1 = require("./UserCountAggregate");
Object.defineProperty(exports, "UserCountAggregate", { enumerable: true, get: function () { return UserCountAggregate_1.UserCountAggregate; } });
var UserGroupBy_1 = require("./UserGroupBy");
Object.defineProperty(exports, "UserGroupBy", { enumerable: true, get: function () { return UserGroupBy_1.UserGroupBy; } });
var UserMaxAggregate_1 = require("./UserMaxAggregate");
Object.defineProperty(exports, "UserMaxAggregate", { enumerable: true, get: function () { return UserMaxAggregate_1.UserMaxAggregate; } });
var UserMinAggregate_1 = require("./UserMinAggregate");
Object.defineProperty(exports, "UserMinAggregate", { enumerable: true, get: function () { return UserMinAggregate_1.UserMinAggregate; } });
