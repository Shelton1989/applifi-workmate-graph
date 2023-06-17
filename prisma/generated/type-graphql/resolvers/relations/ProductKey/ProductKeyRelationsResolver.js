"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductKeyRelationsResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Billing_1 = require("../../../models/Billing");
const ProductKey_1 = require("../../../models/ProductKey");
const helpers_1 = require("../../../helpers");
let ProductKeyRelationsResolver = class ProductKeyRelationsResolver {
    async Billing(productKey, ctx) {
        return (0, helpers_1.getPrismaFromContext)(ctx).productKey.findUnique({
            where: {
                id: productKey.id,
            },
        }).Billing({});
    }
};
tslib_1.__decorate([
    TypeGraphQL.FieldResolver(_type => Billing_1.Billing, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Ctx()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ProductKey_1.ProductKey, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProductKeyRelationsResolver.prototype, "Billing", null);
ProductKeyRelationsResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ProductKey_1.ProductKey)
], ProductKeyRelationsResolver);
exports.ProductKeyRelationsResolver = ProductKeyRelationsResolver;
