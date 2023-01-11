"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePriceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdatePriceArgs_1 = require("./args/UpdatePriceArgs");
const Price_1 = require("../../../models/Price");
const helpers_1 = require("../../../helpers");
let UpdatePriceResolver = class UpdatePriceResolver {
    async updatePrice(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).price.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Price_1.Price, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdatePriceArgs_1.UpdatePriceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdatePriceResolver.prototype, "updatePrice", null);
UpdatePriceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Price_1.Price)
], UpdatePriceResolver);
exports.UpdatePriceResolver = UpdatePriceResolver;
