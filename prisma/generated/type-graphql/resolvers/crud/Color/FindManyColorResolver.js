"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyColorResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindManyColorArgs_1 = require("./args/FindManyColorArgs");
const Color_1 = require("../../../models/Color");
const helpers_1 = require("../../../helpers");
let FindManyColorResolver = class FindManyColorResolver {
    async colors(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).color.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [Color_1.Color], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindManyColorArgs_1.FindManyColorArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindManyColorResolver.prototype, "colors", null);
FindManyColorResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Color_1.Color)
], FindManyColorResolver);
exports.FindManyColorResolver = FindManyColorResolver;
