"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateShippingMethodResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateShippingMethodArgs_1 = require("./args/UpdateShippingMethodArgs");
const ShippingMethod_1 = require("../../../models/ShippingMethod");
const helpers_1 = require("../../../helpers");
let UpdateShippingMethodResolver = class UpdateShippingMethodResolver {
    async updateShippingMethod(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).shippingMethod.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ShippingMethod_1.ShippingMethod, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateShippingMethodArgs_1.UpdateShippingMethodArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateShippingMethodResolver.prototype, "updateShippingMethod", null);
UpdateShippingMethodResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ShippingMethod_1.ShippingMethod)
], UpdateShippingMethodResolver);
exports.UpdateShippingMethodResolver = UpdateShippingMethodResolver;
