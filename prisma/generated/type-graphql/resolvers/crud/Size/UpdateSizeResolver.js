"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSizeResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const UpdateSizeArgs_1 = require("./args/UpdateSizeArgs");
const Size_1 = require("../../../models/Size");
const helpers_1 = require("../../../helpers");
let UpdateSizeResolver = class UpdateSizeResolver {
    async updateSize(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).size.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Size_1.Size, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, UpdateSizeArgs_1.UpdateSizeArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateSizeResolver.prototype, "updateSize", null);
UpdateSizeResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Size_1.Size)
], UpdateSizeResolver);
exports.UpdateSizeResolver = UpdateSizeResolver;
