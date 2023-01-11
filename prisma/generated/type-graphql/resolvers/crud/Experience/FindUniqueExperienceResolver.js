"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueExperienceResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const FindUniqueExperienceArgs_1 = require("./args/FindUniqueExperienceArgs");
const Experience_1 = require("../../../models/Experience");
const helpers_1 = require("../../../helpers");
let FindUniqueExperienceResolver = class FindUniqueExperienceResolver {
    async experience(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).experience.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Experience_1.Experience, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, FindUniqueExperienceArgs_1.FindUniqueExperienceArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueExperienceResolver.prototype, "experience", null);
FindUniqueExperienceResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Experience_1.Experience)
], FindUniqueExperienceResolver);
exports.FindUniqueExperienceResolver = FindUniqueExperienceResolver;
