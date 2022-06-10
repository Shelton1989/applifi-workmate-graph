"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueColorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueColorArgs_1 = require("./args/FindUniqueColorArgs");
const Color_1 = require("../../../models/Color");
const helpers_1 = require("../../../helpers");
let FindUniqueColorResolver = class FindUniqueColorResolver {
    async color(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).color.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Color_1.Color, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueColorArgs_1.FindUniqueColorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueColorResolver.prototype, "color", null);
FindUniqueColorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Color_1.Color)
], FindUniqueColorResolver);
exports.FindUniqueColorResolver = FindUniqueColorResolver;
