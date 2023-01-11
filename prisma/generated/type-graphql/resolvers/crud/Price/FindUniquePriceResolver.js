"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniquePriceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniquePriceArgs_1 = require("./args/FindUniquePriceArgs");
const Price_1 = require("../../../models/Price");
const helpers_1 = require("../../../helpers");
let FindUniquePriceResolver = class FindUniquePriceResolver {
    async price(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).price.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Price_1.Price, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniquePriceArgs_1.FindUniquePriceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniquePriceResolver.prototype, "price", null);
FindUniquePriceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Price_1.Price)
], FindUniquePriceResolver);
exports.FindUniquePriceResolver = FindUniquePriceResolver;
